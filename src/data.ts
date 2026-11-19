export const school = {
  name: 'ACTS Computer College',
  place: 'Santa Cruz, Laguna, Philippines',
  established: 1987,
  phrase: 'Experience, Expertise & Excellence',
  mission: 'ACTS Computer College, the pioneer computer school in Sta. Cruz, Laguna founded in 1987, is a private non-sectarian higher educational institution with an aim to focus on instruction, research and community services, offering curriculum towards experience, expertise and excellence supportive of national development goals and standards of global requirements.',
  vision: 'ACTS Computer College is a higher educational institution dedicated in the holistic development of citizens and leaders in pursuit of truth, shall live a moral life and be guided by their faith in Almighty God and love for His mankind.',
  values: [
    'Leadership towards sustainable national development.',
    'Empowerment of education, experience, expertise and excellence.',
    'Achiever with competence and great commitment.',
    'Dedication in service to God and country.',
    'God-centered higher educational institution.',
  ],
  president: 'Prof. Ruben F. Macalinao, MBA, MM',
  presidentRole: 'School President',
  presidentMessage: `Dear students, parents, and visitors,\n\nWelcome to ACTS Computer College — a place where passion meets purpose and learning transforms lives.\n\nAs the President of this institution, I am deeply honored to lead a community committed to excellence, innovation, and integrity. With decades of experience in both education and industry, I have seen how technology and character-driven learning can shape not only careers but the future of our society.\n\nAt ACTS, we don’t just train minds — we mold leaders. Our academic programs are designed to equip students with real-world skills, while our values-centered culture inspires them to become responsible, compassionate, and visionary individuals. Whether you are a prospective student, a parent seeking a nurturing academic environment, or a partner interested in collaboration, you are welcome here. ACTS is more than a school; it is a family grounded in faith, service, and excellence. Let us journey together as we build brighter futures, one student at a time.`,
  address: 'EGK Building, corner A. Bonifacio Street and Pedro Guevara Avenue, Santa Cruz, Laguna 4009, Philippines.',
  email: 'actscc87@yahoo.com',
  landline: '(049) 501-1484',
  mobiles: ['09988526488', '09178673073'],
  facebook: 'https://www.facebook.com/ACTSCC',
  youtube: 'https://www.youtube.com/@ACTSComputerCollegeACTSCC1987',
} as const

export const history = [
  { year: '1987', title: 'A first in computer education', text: 'Founded in Sta. Cruz, Laguna as the town’s first computer school, offering short courses in programming and office applications.' },
  { year: '1990', title: 'New paths in technology', text: 'Expanded into two- and three-year technology-focused programs.' },
  { year: '1994', title: 'ACTS Computer College', text: 'Moved to a larger campus, took the name ACTS Computer College, and received CHED approval for degree programs including BSCS, BSIT, BSBA, and BSIM.' },
  { year: '1996', title: 'Study Now Pay Later Plan', text: 'Introduced the Study Now Pay Later Plan.' },
  { year: '2006', title: 'ASAP Scholarship', text: 'Introduced the ASAP Scholarship initiative.' },
]

export const strands = [
  { code: 'ABM', name: 'Accountancy, Business and Management', text: 'An academic strand for students interested in business and entrepreneurship.' },
  { code: 'ICT', name: 'Information and Communications Technology', text: 'Covers computer programming, hardware and software installation, basic networking, and troubleshooting.' },
  { code: 'STEM', name: 'Science, Technology, Engineering and Mathematics', text: 'An academic strand focused on science, technology, engineering, and mathematics.' },
  { code: 'HUMSS', name: 'Humanities and Social Sciences', text: 'An academic strand focused on arts, social sciences, and humanities.' },
]

export const degrees = [
  { code: 'BSCS', name: 'BS in Computer Science', text: 'Focuses on computing theories, algorithm design, and developing complex software systems.' },
  { code: 'BSIT', name: 'BS in Information Technology', text: 'Focuses on the practical application of IT systems to meet organizational needs.' },
  { code: 'BTVTEd', name: 'Bachelor of Technical-Vocational Teacher Education', text: 'Prepares future teachers to educate students in technical and vocational fields effectively.' },
  { code: 'BSBA', name: 'BS in Business Administration', text: 'Prepares students to manage human resources in diverse organizational settings.' },
  { code: 'BSAIS', name: 'BS in Accounting Information System', text: 'Trains students in accounting, business, and computer systems for a tech-driven finance career.' },
  { code: 'BSEntrep', name: 'BS in Entrepreneurship', text: 'Develops skills to start, run, and sustain innovative enterprises.' },
  { code: 'BSOA', name: 'BS in Office Administration', text: 'Prepares students for administrative roles in legal, medical, and corporate settings.' },
]

// Add the user's replacement photography to public/images and update paths here.
export const images = {
  president: '/images/president.avif', // The president portrait is the one reference image permitted for reuse.
  home: '',
  seniorHigh: '',
  college: '',
  learning: '',
  community: '',
  campus: '',
}
