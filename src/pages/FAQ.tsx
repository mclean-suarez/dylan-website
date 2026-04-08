import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqs = [
  {
    question: 'What exactly is Ad On AI?',
    answer: 'Ad On AI is a structured AI training and enablement program for staff in your business. All participants start with a 3-month General Introductory Program. Each month includes a one-hour live enablement call, three hours of self-paced modules, a knowledge check, and a Progress Report. When participants are struggling to apply what they have learned, the Ad On AI team provides hands-on support.',
  },
  {
    question: 'How is the monthly cadence structured?',
    answer: 'Each month follows a complete enablement cycle: one live enablement call (one hour), three weekly self-paced sessions through an online enablement terminal, a knowledge check where participants explain what they learned and how they applied AI, a Progress Report delivered to you, and hands-on support from the Ad On AI team when participants need it.',
  },
  {
    question: 'What is the General Introductory Program?',
    answer: 'The General Introductory Program is a 3-month structured program that all participants begin with. Month 1 covers Introduction and Onboarding. Month 2 covers Prompting. Month 3 covers Applying AI to My Workflows. After completing all three months, participants complete a Readiness Check to progress to role-specific training.',
  },
  {
    question: 'What happens after the General Introductory Program?',
    answer: 'After completing the 3-month General Introductory Program, participants complete a Readiness Check. Passing is required to progress into role-specific training such as Admin, Marketing, Finance, or All-Rounder. The training track is selected based on the participant\u2019s responsibilities and the outcomes you want to improve.',
  },
  {
    question: 'What are the self-paced modules?',
    answer: 'Modules are delivered through a purpose-built online enablement terminal. They cover practical AI techniques and workflows relevant to operational roles. Content is continuously updated as AI tools and best practices evolve. Specific module topics are being developed and will be published when available.',
  },
  {
    question: 'What is the knowledge check?',
    answer: 'At the end of each month, participants complete a knowledge check where they explain what they learned and how they applied AI in their work. This is the accountability checkpoint that separates managed enablement from passive learning. Results feed into the Progress Report.',
  },
  {
    question: 'What kind of hands-on support is provided?',
    answer: 'When a participant is struggling to apply what they have learned, the Ad On AI team steps in with practical assistance. This may include workflow guidance, help selecting the right AI approach, prompt templates, or a small workflow improvement deployed directly into their day-to-day work. The scope is deliberately kept small to ensure quality and fast deployment.',
  },
  {
    question: 'What if we need a bigger build?',
    answer: 'Anything that exceeds the scope of hands-on support becomes a separate project, scoped and delivered independently. Custom integrations, full system architecture, and bespoke software are not included in the program. This keeps the program focused and predictable.',
  },
  {
    question: 'Can our representative attend the enablement calls?',
    answer: 'Yes. Client representatives are welcome to attend the monthly live enablement call to observe the process, stay across participant progress, and provide context about priorities or upcoming workflow changes.',
  },
  {
    question: 'What is the Progress Report?',
    answer: 'A clear report delivered to the client each month showing what was learned, what was applied, and how participants are progressing. It provides visibility into the program\u2019s value without requiring the client to manage the process directly.',
  },
  {
    question: 'Is this a training program or a webinar?',
    answer: 'No. Ad On AI is not a generic training program, not a webinar, and not pre-recorded content. The live enablement calls are interactive and hands-on. The self-paced modules are delivered through a purpose-built enablement terminal. Everything is structured around practical application, not passive learning.',
  },
  {
    question: 'Do we need to be using Ad On Workforce?',
    answer: 'The program is designed primarily for businesses using Ad On Workforce, but it works with any staffing arrangement. The key requirement is that the employees are working within your business workflows on an ongoing basis.',
  },
  {
    question: 'How do you handle data and safe use of AI?',
    answer: 'We take a practical approach to AI safety. All implementations follow common-sense data handling practices. We don\u2019t send sensitive client data to AI tools without clear protocols, and we build workflows with appropriate human oversight. Specific data policies are discussed during onboarding.',
  },
  {
    question: 'What kind of businesses is this for?',
    answer: 'Australian SMEs with 5 to 50 staff, typically founder-led service businesses with staff who handle operational, administrative, or client-facing work. Businesses that want measurable outcomes and accountability, not impressive demos.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="text-base font-semibold text-white group-hover:text-brand-700 transition-colors">
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-stone-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-sm text-white leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      <PageHeader
        label="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about the Ad On AI managed enablement program and how it fits your business."
      />

      <section ref={ref} className="section-padding bg-[#0A0C1A] relative overflow-hidden">
        <div className="absolute inset-0 items-center justify-end pointer-events-none hidden md:flex">
            <img
              src="/src/images/adonailogo.webp" // adjust path
              alt="Hero"
              className="
                w-[400px] h-auto opacity-100
                md:w-[400px] md:opacity-100
                lg:w-[400px] lg:opacity-100
                xl:w-[400px]
                translate-x-8 md:translate-x-0
                lg:-translate-x-[13rem]
                translate-y-[34rem]
                select-none
              "
            />
        </div>
        <div className="section-container">
          <div className={`max-w-3xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}

            <div className="mt-14 text-center">
              <p className="text-sm text-stone-500 mb-6">
                Have a question that isn&apos;t answered here?
              </p>
              <Link to="/contact" className="btn-primary text-sm">
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
