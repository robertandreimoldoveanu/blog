import Head from "next/head";
import Image from "next/image";

export default function About() {
    return <>
        <Head>
            <title>about me | robert&apos;s digital garden</title>
        </Head>
        <div className="prose prose-stone about m-6">
            <h1 className="text-center text-3xl mb-6">About me</h1>
            <Image className="mx-auto rounded-full" width="256" height="256" src="/me.jpg" alt="Photo of Robert Moldoveanu, blog author" />
            <p className="indent-8">I&apos;m Robert, currently a Senior Software Engineer working for UiPath. I&apos;ve spent most of my professional work doing frontend development, but I also have a taste for mobile and backend as well. </p>
            <p className="indent-8 mt-6">Coding wise, I like to think I know:</p>
            <ul className="list-disc">
                <li>Angular a lot</li>
                <li>React a little</li>
                <li>NodeJS decently</li>
                <li>PHP a little</li>
                <li>MongoDB and SQL enough to get around</li>
            </ul>
            <p className="indent-8 mt-6">But I&apos;m not sure these even matter, because I believe in language agnosticism. I understand that concept to mean you should use whichever tool is right for the job instead of growing too fond of one. I think it was Maslow who said:<em>&ldquo;If the only tool you have is a hammer, it is tempting to treat everything as if it were a nail.&rdquo;</em>. I think it helps to increase your toolset, so I also dabbled with Java, Android, C#, C++, Flutter, Python & Django. </p>
            <p className="indent-8 mt-6">Outside coding, I&apos;m particularly fascinated about: </p>
            <ul className="list-disc">
                <li>Carl Jung&apos;s work on the collective unconscious, the archetypes, myths and symbols</li>
                <li>Friedrich Nietzsche&apos;s philosophical combatance and idea of the Ubermensch</li>
                <li>The teaching of the Stoics - most fond of the Enchiridion and Seneca&apos;s letters</li>
                <li>Alan Watts books and Taoism</li>
                <li>Writing fiction</li>
                <li>Gaming masterpieces like The Witcher 3</li>
                <li>... a list so long I couldn&apos;t recall it entirely</li>
            </ul>
        </div>
    </>
}