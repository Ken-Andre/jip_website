import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getSortedPostsData } from "@/lib/posts"

export function NewsSection() {
    const posts = getSortedPostsData().slice(0, 3) // Get latest 3 posts

    if (posts.length === 0) {
        return null
    }

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Actualités</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Restez informé des dernières nouvelles et annonces concernant la Journée Internationale des Pasteurs.
                        </p>
                    </div>
                    {/* <Button variant="outline" asChild className="hidden md:inline-flex">
            <Link href="/blog">
              Voir toutes les actualités <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/demo/blog/${post.slug}`} className="block">
                            <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer">
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                        <Calendar className="h-4 w-4 text-gold" />
                                        <time dateTime={post.date}>
                                            {new Date(post.date).toLocaleDateString('fr-FR', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* Mobile View All Button */}
                {/* <div className="mt-12 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/blog">
              Voir toutes les actualités <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div> */}
            </div>
        </section>
    )
}
