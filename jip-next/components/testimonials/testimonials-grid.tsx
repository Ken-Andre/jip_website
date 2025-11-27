import { Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        content: "La JIP a été un tournant décisif dans mon ministère. Les enseignements et la communion fraternelle m'ont redonné la force de continuer.",
        author: "Pasteur Jean",
        role: "Église de la Grâce",
        location: "Yaoundé"
    },
    {
        id: 2,
        content: "Une organisation impeccable et une atmosphère spirituelle intense. Je recommande vivement à tous les serviteurs de Dieu.",
        author: "Apôtre Michel",
        role: "Mission Foi et Vie",
        location: "Douala"
    },
    {
        id: 3,
        content: "C'est un moment privilégié pour se ressourcer et échanger avec d'autres leaders. Merci pour cette initiative.",
        author: "Prophétesse Sarah",
        role: "Centre Chrétien",
        location: "Bafoussam"
    },
    {
        id: 4,
        content: "J'ai été particulièrement touché par la qualité des intervenants et la pertinence des thèmes abordés.",
        author: "Pasteur David",
        role: "Assemblée de Dieu",
        location: "Bertoua"
    },
    {
        id: 5,
        content: "Un cadre d'excellence pour des serviteurs d'excellence. La JIP est un rendez-vous incontournable.",
        author: "Évêque Paul",
        role: "Cathédrale de la Foi",
        location: "Garoua"
    },
    {
        id: 6,
        content: "La vision portée par cet événement est exactement ce dont l'Église au Cameroun a besoin aujourd'hui.",
        author: "Révérend Pierre",
        role: "Église Baptiste",
        location: "Maroua"
    }
]

export function TestimonialsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 relative">
                    <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />

                    <div className="relative z-10">
                        <p className="text-muted-foreground italic mb-6 leading-relaxed">
                            "{testimonial.content}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                {testimonial.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                                <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
