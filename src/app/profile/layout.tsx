
export default function layout( {children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            {children}
            <p>Profile</p>
        </div>
    );
}