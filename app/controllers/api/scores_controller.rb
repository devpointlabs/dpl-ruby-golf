class Api::ScoresController < ApplicationController
  def index
    scores = []

    User.all.each do |user|
      smallest_score = user.scores.first['total']
      date = nil

      user.scores.each do |score|
        total = score['total']
        if total <= smallest_score
          smallest_score = total
          date = score['date']
        end
      end

      scores << { email: user.email, date: date, score: smallest_score }
    end

    render json: scores.sort_by {|_key, value| value }.reverse
  end

  def create
    scores = params[:scores].values.map{ |s| s.to_i }
    total = scores.inject(&:+)
    current_user.scores << { date: Date.today, scores: scores, total: total }
    current_user.save
    render json: current_user
  end
end
