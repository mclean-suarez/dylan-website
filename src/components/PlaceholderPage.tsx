import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from './Seo'
import {
  KEYS, CYAN, WARM,
  DarkPageHeader, Aurora, BlueprintGrid, Grain, MagneticButton,
} from './hero/visuals'

interface PlaceholderPageProps {
  label: string
  title: string
  subtitle: string
  seoTitle: string
  seoDescription: string
  path: string
}

export default function PlaceholderPage({
  label,
  title,
  subtitle,
  seoTitle,
  seoDescription,
  path,
}: PlaceholderPageProps) {
  return (
    <>
      <Seo title={seoTitle} description={seoDescription} path={path} />
      <style>{KEYS}</style>

      <div className="bg-black">
        <DarkPageHeader label={label} title={title} subtitle={subtitle} />

        <section className="relative overflow-hidden" style={{ background: '#05070D' }}>
          <Aurora warm={false} />
          <BlueprintGrid />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-24">
            <div className="max-w-2xl rounded-[18px] border border-white/10 bg-white/[0.03] p-7 sm:p-9" style={{ borderLeft: `2px solid ${WARM}` }}>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-3" style={{ color: CYAN }}>
                Coming Soon
              </p>
              <p className="text-[15px] leading-relaxed mb-7" style={{ color: 'rgba(213,224,255,0.7)' }}>
                We&rsquo;re putting the finishing touches on this page. In the meantime, book a
                call and we&rsquo;ll walk you through how it works.
              </p>
              <MagneticButton variant="solid" as={Link} to="/contact">
                BOOK A CALL <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
          <Grain opacity={0.1} />
        </section>
      </div>
    </>
  )
}
