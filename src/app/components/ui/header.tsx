import Image from 'next/image';
import Link from 'next/link'

interface RedirectButtonProps {
    text: string;
    redirect: string;
}

export default function Header() {
    return (
        <div className="header flex items-center space-x-4 border-b-2 border-maintheme">
            <DisplayLogo />
            <RedirectButton 
                text="Home" 
                redirect="/" 
            />
            <RedirectButton 
                text="Home 2" 
                redirect="/" 
            />
            <RedirectButton 
                text="Home 3" 
                redirect="/" 
            />
            
        </div>
    );
}

function DisplayLogo() {
    return (
        <div className="logo">
            <Link href="/">
                <Image 
                    src="/logo.svg"
                    alt="logo"
                    width={130}
                    height={130}
                />
            </Link>
        </div>
    );
}

function RedirectButton({ text, redirect }: RedirectButtonProps) {
    return (
        <div className="redirect-button">
            <a href={redirect}>
                <button className="px-4 py-2 border-2 border-maintheme text-main-color rounded-md hover:bg-main-color hover:text-maintheme transition duration-200">
                    {text}
                </button>
            </a>
        </div>
    );
}