import Image from 'next/image';
import Link from 'next/link'

interface RedirectButtonProps {
    text: string;
    redirect: string;
}

export default function Header() {
    return (
        <div className="flex items-center space-x-3 pr-3 border-b-2 border-maintheme">
            <DisplayLogo />
            <RedirectButton 
                text="Home" 
                redirect="/" 
            />
            <RedirectButton 
                text="Analytics" 
                redirect="/analytics"
            />
            <RedirectButton 
                text="Settings" 
                redirect="/settings"
            />
            <div className="flex-grow"></div>
            <DisplayUserProfile />
        </div>
    );
}

function DisplayLogo() {
    return (
        <div className="w-13 h-13">
            <Link href="/">
                <Image 
                    src="/logo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                />
            </Link>
        </div>
    );
}

function RedirectButton({ text, redirect }: RedirectButtonProps) {
    return (
        <div className="px-2 py-1 border-2 border-maintheme text-main-color rounded-md ">
            <Link href={redirect}>
                <button className="hover:bg-main-color hover:text-maintheme transition duration-200">
                    {text}
                </button>
            </Link>
        </div>
    );
}

function DisplayUserProfile() {
    return (
        <div className="bg-maintheme rounded-full">
            <Link href="/profile">
                <div className="bg-maintheme rounded-full">
                    <Image 
                        src="/generic_user_profile.webp"
                        alt="profile"
                        width={50}
                        height={50}
                    />
                </div>
            </Link>
        </div>
    );
}