u = User.first_or_create(email: 'test@test.com', password: 'password' )
u.scores = []

u.scores << {date: Date.today, scores: [3,5,3,4,2,3,10,1,3], total: [3,5,3,4,2,3,10,1,3].inject(&:+)}
u.scores << {date: Date.today - 1.day, scores: [13,5,2,6,3,10,8,3,5], total: [13,5,2,6,3,10,8,3,5].inject(&:+) }
u.scores << {date: Date.today - 1.month, scores: [3,4,2,5,1,4,15,7,3], total: [3,4,2,5,1,4,15,7,3].inject(&:+) }

u.save
