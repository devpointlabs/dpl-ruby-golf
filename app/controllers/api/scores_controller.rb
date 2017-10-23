class Api::ScoresController < ApplicationController
  def index
    complete_scores = []
    incomplete_scores = []

    User.all.each do |user|
      user.scores.each do |score|
        complete = score['complete']
        result =  {
          email: user.email,
          date: score['date'],
          score: score['total'],
          github_url: score['github_url'],
          complete: complete,
          holes_completed: score['holes_completed']
        }
        if complete
          complete_scores << result
        else
          incomplete_scores << result
        end
      end
    end
    render json: { complete_scores: complete_scores, incomplete_scores: incomplete_scores }
  end

  def create
    complete = true
    holes_completed = 0
    scores = params[:scores].values.map do |value|
      parsed = value.to_i
      if parsed > 0
        holes_completed += 1
      else
        complete = false
      end
      parsed
    end
    total = scores.inject(&:+)
    current_user.scores << {
      date: Date.today,
      scores: scores,
      total: total,
      github_url: params[:github_url],
      complete: complete,
      holes_completed: holes_completed
    }
    current_user.save
    render json: current_user
  end
end
