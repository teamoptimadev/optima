import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQ() {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="shipping"
            className="w-full"
        >
            <AccordionItem value="shipping">
                <AccordionTrigger>What is team optima?</AccordionTrigger>
                <AccordionContent>
                    Team Optima is a group of engineers and creators solving real-world problems with code, collaboration, and relentless execution. From open-source innovation to practical solutions, we build tools that matter.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
                <AccordionTrigger>What project do optima build?</AccordionTrigger>
                <AccordionContent>
                    We build projects that solve real-world problems. From open-source innovation to practical solutions, we build tools that matter.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
                <AccordionTrigger>How can I contact team optima?</AccordionTrigger>
                <AccordionContent>
                    Reach us via email at <Link href="mailto:teamoptimadev@gamil.com" className="hover:text-primary transition-colors">teamoptimadev@gamil.com</Link>. We respond within 24 hours
                    during business days.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
