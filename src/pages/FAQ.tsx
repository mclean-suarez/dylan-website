import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { KEYS, CYAN, DarkPageHeader, Aurora, BlueprintGrid, Grain, MagneticButton } from '../components/hero/visuals'

const faqs = [
  {
    question: 'What exactly is Ad On AI?',
    answer: 'Ad On AI runs an ongoing, guided AI training and enablement program for the staff of Australian businesses. Over three months and 24 hands-on modules, your people go from using AI well, to automating their repetitive work, to deploying AI agents that run whole tasks for them — all built around the real work they already do.',
  },
  {
    question: 'Do our staff need to be technical?',
    answer: 'No. The program starts from first principles and is built around the everyday tasks your people already do, with a trainer on hand the moment they get stuck.',
  },
  {
    question: 'How much time does it take each week?',
    answer: 'About two hours a week — two short modules that pair a concept with a hands-on build, applied inside the work they’re already doing, so it rarely feels like “extra”.',
  },
  {
    question: 'How do I know they’re actually doing it?',
    answer: 'Every module includes a test or practical project. They can’t progress without completing it, and you’re notified if they stall.',
  },
  {
    question: 'How fast will I see results?',
    answer: 'Most people start using AI in their daily work from month one — you’ll notice the difference before you read a report.',
  },
  {
    question: 'What if they miss a session?',
    answer: 'All sessions are recorded and sent automatically, and stay in the academy for life.',
  },
  {
    question: 'Can new staff join mid-program?',
    answer: 'Yes. New intake starts every month at level 1.',
  },
  {
    question: 'Can I add more staff later?',
    answer: 'Yes. Monthly intake is limited so each person gets proper support, so it’s best to plan ahead — some months have a waiting list.',
  },
  {
    question: 'Can I cancel?',
    answer: 'Yes, any time.',
  },
  {
    question: 'What if we don’t use Claude?',
    answer: 'The skills are tool-agnostic by design — they transfer to ChatGPT, Copilot, Gemini and whatever comes next.',
  },
  {
    question: 'Is there support after the program?',
    answer: 'Yes — lifetime academy access plus ongoing webinars, podcasts, masterclasses and newsletters, designed to keep your team current as AI moves.',
  },
  {
    question: 'How do you handle data and safe use of AI?',
    answer: 'We take a practical approach to AI safety. The very first module covers what client data should never go into a chat, and we build workflows with appropriate human oversight. Specific data policies are discussed during onboarding.',
  },
  {
    question: 'What kind of businesses is this for?',
    answer: 'Primarily Australian small-to-medium service businesses that want their people genuinely using AI in their day-to-day work — measurable outcomes, not impressive demos.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className="text-base font-semibold text-white transition-colors group-hover:text-[#6F9BFF]">
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} style={{ color: CYAN }} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-sm leading-relaxed pr-12" style={{ color: 'rgba(213,224,255,0.7)' }}>{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <>
      <Seo
        title="Ad On AI FAQ | Common Questions About the Program"
        description="Read answers to common questions about Ad On AI, including the monthly cadence, role-specific training, guided sessions, support, and reporting."
        path="/faq"
      />
      <style>{KEYS}</style>

      <div className="bg-black">
        <DarkPageHeader
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about the Ad On AI managed enablement program and how it fits your business."
        />

        <section ref={ref} className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[820px] mx-auto px-6 sm:px-10 py-20">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
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
                <p className="text-sm mb-6" style={{ color: 'rgba(213,224,255,0.55)' }}>
                  Have a question that isn&apos;t answered here?
                </p>
                <MagneticButton variant="solid" as={Link} to="/contact">
                  BOOK A CALL <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>
      </div>
    </>
  )
}
