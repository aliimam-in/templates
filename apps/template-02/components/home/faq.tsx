import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    id: "1",
    title: "What makes Dalim Design different?",
    content:
      "Dalim Design blends creativity with clarity, offering a visually consistent system that empowers both designers and developers. It emphasizes minimal aesthetics, strong typography, and pixel-perfect components tailored for modern web experiences.",
  },
  {
    id: "2",
    title: "How can I customize the design system?",
    content:
      "Dalim Design is highly flexible—modify design tokens, color palettes, typography scales, and spacing units to suit your brand. The system supports seamless theming, including dark mode and accessibility-aware contrast settings.",
  },
  {
    id: "3",
    title: "Is Dalim Design optimized for performance?",
    content:
      "Absolutely. The design system is streamlined to avoid bloat, enabling fast load times and high responsiveness. Assets are optimized for modern rendering pipelines and support responsive and adaptive layouts by default.",
  },
  {
    id: "4",
    title: "How accessible is Dalim Design?",
    content:
      "Accessibility is a core principle. All visual elements are designed with inclusive UX in mind—ensuring legible typography, sufficient contrast, focus indicators, and compatibility with assistive technologies.",
  },
]

export function FAQ() {
  return (
    <div className="space-y-4 flex justify-center py-20">
      <Accordion
        type="single"
        collapsible
        className="w-[350px] md:w-lg -space-y-px rounded-xl p-2 shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
        defaultValue="2"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative border px-4 py-1 outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]"
          >
            <AccordionTrigger className="justify-start gap-3 rounded-md py-2 text-[15px] leading-6 outline-none hover:no-underline focus-visible:ring-0 [&>svg]:-order-1">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground ps-7 pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
