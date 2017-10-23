class Api::ScoresController < ApplicationController
  def index
    complete_scores = []
    incomplete_scores = []

    User.all.each do |user|
      user.scores.each do |score|
        total = score['total']
        complete = score['complete']
        date = score['date']
        github_url = score['github_url']
        result =  { email: user.email, date: date, score: total, github_url: github_url, complete: complete }
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
    scores = params[:scores].values.map do |value|
      parsed = value.to_i
      complete = false if parsed == 0
      parsed
    end
    total = scores.inject(&:+)
    current_user.scores << {
      date: Date.today,
      scores: scores,
      total: total,
      github_url: params[:github_url],
      complete: complete
    }
    current_user.save
    render json: current_user
  end
end
