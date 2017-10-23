u = User.first_or_create(email: 'test@test.com', password: 'password', role: 'admin')
u.scores = []

u.scores << {
  date: Date.today,
  scores: [3,5,3,4,2,3,10,1,3],
  total: [0,5,3,4,2,3,10,1,0].inject(&:+),
  github_url: 'www.noncomplete.com',
  complete: false,
}

u.scores << {
  date: Date.today - 1.day,
  scores: [13,5,2,6,3,10,8,3,5],
  total: [13,5,2,6,3,10,8,3,5].inject(&:+),
  github_url: 'www.completehigh.com',
  complete: true,
}

u.scores << {
  date: Date.today - 1.month,
  scores: [3,4,2,5,1,4,15,7,3],
  total: [3,4,2,5,1,4,15,7,3].inject(&:+),
  github_url: 'www.completemiddle.com',
  complete: true,
}

u.save
