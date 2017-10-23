class Api::ScoresController < ApplicationController
  def index
    scores = []

    User.all.each do |user|
      smallest_score = user.scores.select{ |s| s['complete'] }.first['total']
      date = nil
      github_url = ''

      user.scores.each do |score|
        next unless score['complete']
        total = score['total']
        if total <= smallest_score
          smallest_score = total
          date = score['date']
          github_url = score['github_url']
        end
      end

      if date
        scores << { email: user.email, date: date, score: smallest_score, github_url: github_url }
      end
    end

    render json: scores.sort_by {|_key, value| value }.reverse
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
