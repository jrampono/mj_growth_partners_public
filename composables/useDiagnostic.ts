export interface DiagnosticQuestion {
  id: string
  statement: string
  score: number | null
}

export interface DiagnosticDimension {
  key: string
  name: string
  subtitle: string
  questions: DiagnosticQuestion[]
}

export interface BandInfo {
  label: string
  color: string
  bgColor: string
  interpretation: string
}

const dimensions: DiagnosticDimension[] = [
  {
    key: 'growth-engine',
    name: 'Growth Engine',
    subtitle: 'Revenue model clarity, pipeline health, customer acquisition economics',
    questions: [
      { id: '1.1', statement: 'We can clearly explain how we make money and which revenue streams are most profitable.', score: null },
      { id: '1.2', statement: 'We know exactly how much it costs us to acquire a new customer, and that number is trending in the right direction.', score: null },
      { id: '1.3', statement: 'Our sales pipeline has enough qualified opportunities to hit our revenue targets for the next 90 days.', score: null },
      { id: '1.4', statement: 'We have a repeatable process for generating new leads that does not depend on the founder\'s personal network.', score: null },
      { id: '1.5', statement: 'We track conversion rates at each stage of our sales process and use that data to make decisions.', score: null },
      { id: '1.6', statement: 'Our pricing reflects the value we deliver, and we review it at least annually based on market data.', score: null },
    ],
  },
  {
    key: 'operations',
    name: 'Operations & Delivery',
    subtitle: 'Process maturity, bottlenecks, capacity utilisation',
    questions: [
      { id: '2.1', statement: 'Our core delivery process is documented well enough that a new team member could follow it without hand-holding.', score: null },
      { id: '2.2', statement: 'We consistently deliver to customers on time and to the standard we promised.', score: null },
      { id: '2.3', statement: 'We know where our biggest operational bottleneck is right now and have a plan to fix it.', score: null },
      { id: '2.4', statement: 'We have clear visibility into team capacity and can tell when we are approaching overload before it becomes a crisis.', score: null },
      { id: '2.5', statement: 'When something goes wrong in delivery, we have a standard process for fixing it and preventing it from happening again.', score: null },
      { id: '2.6', statement: 'We could handle a 30% increase in volume tomorrow without quality falling off a cliff.', score: null },
    ],
  },
  {
    key: 'team-leadership',
    name: 'Team & Leadership',
    subtitle: 'Founder dependency, role clarity, delegation effectiveness',
    questions: [
      { id: '3.1', statement: 'The business can run for two weeks without the founder being involved in day-to-day decisions.', score: null },
      { id: '3.2', statement: 'Every team member has a clear role with defined responsibilities, and there is minimal overlap or confusion about who owns what.', score: null },
      { id: '3.3', statement: 'We have at least one person besides the founder who can make important decisions without needing approval.', score: null },
      { id: '3.4', statement: 'Our hiring process consistently brings in people who perform well and stay for more than 12 months.', score: null },
      { id: '3.5', statement: 'Team members regularly receive honest feedback on their performance and know what good looks like in their role.', score: null },
      { id: '3.6', statement: 'The founder spends most of their time on strategic work rather than firefighting operational issues.', score: null },
    ],
  },
  {
    key: 'financial-health',
    name: 'Financial Health',
    subtitle: 'Unit economics, cash flow, margin structure',
    questions: [
      { id: '4.1', statement: 'We know the profit margin on each of our products or services and can identify which ones actually make us money.', score: null },
      { id: '4.2', statement: 'We have at least three months of cash runway at any given time, and we actively manage cash flow.', score: null },
      { id: '4.3', statement: 'We review financial performance against a budget or forecast at least monthly, and the leadership team understands the numbers.', score: null },
      { id: '4.4', statement: 'Our lifetime customer value is significantly higher than our cost to acquire that customer (at least 3:1).', score: null },
      { id: '4.5', statement: 'We have clear financial targets for the year and can track our progress against them in real time.', score: null },
      { id: '4.6', statement: 'Our revenue is not dangerously concentrated — no single customer accounts for more than 20% of total revenue.', score: null },
    ],
  },
  {
    key: 'customer-experience',
    name: 'Customer Experience',
    subtitle: 'Retention, satisfaction, feedback loops',
    questions: [
      { id: '5.1', statement: 'We actively measure customer satisfaction (NPS, surveys, reviews) and can quote our current score.', score: null },
      { id: '5.2', statement: 'Our customer retention rate is above 80%, and we know exactly why customers leave when they do.', score: null },
      { id: '5.3', statement: 'We have a structured process for collecting and acting on customer feedback, not just reading it and moving on.', score: null },
      { id: '5.4', statement: 'Customers regularly refer new business to us without being asked or incentivised.', score: null },
      { id: '5.5', statement: 'When a customer has a problem, they can get it resolved quickly without being passed around between people.', score: null },
      { id: '5.6', statement: 'We proactively check in with customers rather than only hearing from them when something goes wrong.', score: null },
    ],
  },
  {
    key: 'technology-tools',
    name: 'Technology & Tools',
    subtitle: 'Current stack, integration gaps, data accessibility',
    questions: [
      { id: '6.1', statement: 'Our core business tools (CRM, project management, accounting) talk to each other without manual data entry in between.', score: null },
      { id: '6.2', statement: 'The team actually uses the tools we pay for — adoption is high and we are not paying for shelfware.', score: null },
      { id: '6.3', statement: 'We can pull a report on any key business metric within 15 minutes without asking someone to build a spreadsheet.', score: null },
      { id: '6.4', statement: 'Our technology choices are driven by business needs, not by what the most technical person in the room thinks is cool.', score: null },
      { id: '6.5', statement: 'We have a single source of truth for customer data that the whole team trusts and keeps up to date.', score: null },
      { id: '6.6', statement: 'Our current tools can scale with us — we will not need to rip and replace everything if we double in size.', score: null },
    ],
  },
  {
    key: 'ai-readiness',
    name: 'AI Readiness',
    subtitle: 'Process documentation quality, data hygiene, automation potential',
    questions: [
      { id: '7.1', statement: 'Our key business processes are documented in enough detail that they could be explained to a machine, not just a human.', score: null },
      { id: '7.2', statement: 'Our data is clean, consistently formatted, and stored in structured systems rather than scattered across spreadsheets and inboxes.', score: null },
      { id: '7.3', statement: 'We can identify at least three repetitive tasks in the business that a human should not be doing manually.', score: null },
      { id: '7.4', statement: 'The team is open to adopting new tools and ways of working — change is not met with resistance or fear.', score: null },
      { id: '7.5', statement: 'We have someone (internal or external) who understands what AI can and cannot do for a business like ours.', score: null },
      { id: '7.6', statement: 'We already use some form of automation (even simple things like email sequences or auto-generated reports) in our daily operations.', score: null },
    ],
  },
  {
    key: 'strategic-clarity',
    name: 'Strategic Clarity',
    subtitle: 'Vision alignment, prioritisation discipline, decision-making speed',
    questions: [
      { id: '8.1', statement: 'The leadership team agrees on where the business is heading over the next 12 months and can articulate it clearly.', score: null },
      { id: '8.2', statement: 'We have no more than three strategic priorities at any time, and the whole team knows what they are.', score: null },
      { id: '8.3', statement: 'When a new opportunity comes along, we have a clear framework for deciding whether to pursue it or say no.', score: null },
      { id: '8.4', statement: 'Important decisions get made within days, not weeks — we do not get stuck in analysis paralysis.', score: null },
      { id: '8.5', statement: 'We regularly review what is working and what is not, and we are willing to kill projects that are not delivering.', score: null },
      { id: '8.6', statement: 'Everyone in the business can explain our competitive advantage in one sentence.', score: null },
    ],
  },
]

export function getBand(score: number): BandInfo {
  if (score <= 2.0) return {
    label: 'Critical',
    color: '#DC2626',
    bgColor: '#FEF2F2',
    interpretation: 'Immediate attention required. This is actively holding the business back.',
  }
  if (score <= 3.0) return {
    label: 'Developing',
    color: '#F59E0B',
    bgColor: '#FFFBEB',
    interpretation: 'Significant gaps to address. The foundations are weak and will crack under pressure.',
  }
  if (score <= 3.5) return {
    label: 'Functional',
    color: '#EAB308',
    bgColor: '#FEFCE8',
    interpretation: 'Working but with clear improvement opportunities. Targeted improvements will unlock real gains.',
  }
  if (score <= 4.0) return {
    label: 'Strong',
    color: '#0D8B5A',
    bgColor: '#F0FDF4',
    interpretation: 'Well-developed with fine-tuning opportunities. Solid foundation in place.',
  }
  return {
    label: 'Optimised',
    color: '#065F46',
    bgColor: '#ECFDF5',
    interpretation: 'Best-in-class performance. Maintain and share these practices across weaker areas.',
  }
}

const STORAGE_KEY = 'mjgp-diagnostic-progress'

function saveToStorage(state: { dimensions: DiagnosticDimension[]; currentStep: number; contactInfo: { name: string; email: string; company: string } }) {
  try {
    const data = {
      currentStep: state.currentStep,
      contactInfo: state.contactInfo,
      scores: state.dimensions.map(d => ({
        key: d.key,
        answers: d.questions.map(q => ({ id: q.id, score: q.score })),
      })),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch { /* localStorage unavailable */ }
}

function loadFromStorage(state: { dimensions: DiagnosticDimension[]; currentStep: number; contactInfo: { name: string; email: string; company: string } }) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    const data = JSON.parse(raw)
    if (data.currentStep != null && data.currentStep < 10) {
      state.currentStep = data.currentStep
    }
    if (data.contactInfo) {
      Object.assign(state.contactInfo, data.contactInfo)
    }
    if (Array.isArray(data.scores)) {
      for (const saved of data.scores) {
        const dim = state.dimensions.find(d => d.key === saved.key)
        if (!dim) continue
        for (const ans of saved.answers) {
          const q = dim.questions.find(q => q.id === ans.id)
          if (q && ans.score != null) q.score = ans.score
        }
      }
    }
  } catch { /* localStorage unavailable or corrupt */ }
}

function clearStorage() {
  try { localStorage.removeItem(STORAGE_KEY) } catch { /* noop */ }
}

export function useDiagnostic() {
  const state = reactive({
    dimensions: JSON.parse(JSON.stringify(dimensions)) as DiagnosticDimension[],
    currentStep: 0, // 0 = intro, 1-8 = dimensions, 9 = contact info, 10 = results
    contactInfo: {
      name: '',
      email: '',
      company: '',
    },
  })

  // Restore saved progress on init (client-side only)
  if (import.meta.client) {
    loadFromStorage(state)
  }

  const totalSteps = 10 // intro(0) + 8 dimensions + contact(9) → results(10)

  const progress = computed(() => {
    if (state.currentStep === 0) return 0
    if (state.currentStep >= 10) return 100
    return Math.round((state.currentStep / totalSteps) * 100)
  })

  const currentDimension = computed(() => {
    if (state.currentStep >= 1 && state.currentStep <= 8) {
      return state.dimensions[state.currentStep - 1]
    }
    return null
  })

  const canProceed = computed(() => {
    if (state.currentStep === 0) return true
    if (state.currentStep >= 1 && state.currentStep <= 8) {
      const dim = state.dimensions[state.currentStep - 1]
      return dim.questions.every(q => q.score !== null)
    }
    if (state.currentStep === 9) {
      return state.contactInfo.name.trim() !== '' && state.contactInfo.email.trim() !== ''
    }
    return true
  })

  const dimensionScores = computed(() => {
    return state.dimensions.map(dim => {
      const answered = dim.questions.filter(q => q.score !== null)
      if (answered.length === 0) return { ...dim, average: 0, total: 0, band: getBand(0) }
      const total = answered.reduce((sum, q) => sum + (q.score || 0), 0)
      const average = Number((total / 6).toFixed(1))
      return { ...dim, average, total, band: getBand(average) }
    })
  })

  const overallScore = computed(() => {
    const allScores = state.dimensions.flatMap(d => d.questions.map(q => q.score)).filter(s => s !== null) as number[]
    if (allScores.length === 0) return 0
    return Number((allScores.reduce((a, b) => a + b, 0) / allScores.length).toFixed(1))
  })

  const overallBand = computed(() => getBand(overallScore.value))

  function persist() {
    if (import.meta.client) saveToStorage(state)
  }

  function next() {
    if (canProceed.value && state.currentStep < 10) {
      state.currentStep++
      persist()
    }
  }

  function prev() {
    if (state.currentStep > 0) {
      state.currentStep--
      persist()
    }
  }

  function goToResults() {
    state.currentStep = 10
  }

  function setScore(questionId: string, score: number) {
    for (const dim of state.dimensions) {
      const q = dim.questions.find(q => q.id === questionId)
      if (q) {
        q.score = score
        persist()
        break
      }
    }
  }

  function reset() {
    state.currentStep = 0
    state.contactInfo = { name: '', email: '', company: '' }
    for (const dim of state.dimensions) {
      for (const q of dim.questions) {
        q.score = null
      }
    }
    clearStorage()
  }

  return {
    state,
    progress,
    currentDimension,
    canProceed,
    dimensionScores,
    overallScore,
    overallBand,
    next,
    prev,
    goToResults,
    setScore,
    reset,
  }
}
