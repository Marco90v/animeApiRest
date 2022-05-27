import { useParams } from "react-router-dom";

const Details = () => {
    const { mal_id } = useParams();

    // large_image_url, title, title_english, title_japanese, type, aired(string), episodes, duration, synopsis

    return(
        <>
            <article>
                <picture>
                    <img src="https://cdn.myanimelist.net/images/anime/1223/96541l.webp" alt="" srcset="" />
                </picture>
                <section>
                    <h2>Fullmetal Alchemist: Brotherhood</h2>
                    <h3>鋼の錬金術師 FULLMETAL ALCHEMIST</h3>
                    <p><strong>Fecha de emision:</strong> Apr 5, 2009 to Jul 4, 2010</p>
                    <p><strong>Type:</strong> TV</p>
                    <p><strong>Episodes:</strong> 64</p>
                    <p><strong>Duracion:</strong> 24 min per ep</p>
                    <p>After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world. [Written by MAL Rewrite]</p>
                </section>
            </article>
        </>
    );
}

export default Details;