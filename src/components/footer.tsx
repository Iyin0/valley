import Link from "next/link";

interface MainFooterProps {

}

const MainFooter: React.FunctionComponent<MainFooterProps> = () => {

    const links = ['Contact Support', 'About Us', 'Terms', 'Privacy', 'LinkedIn', 'X']

    return (
        <footer className="flex items-center justify-center py-6 px-8 bg-[rgba(23, 23, 31, 0.05)] h-[184px] md:h-[84px]">
            <div className="flex flex-col items-center justify-between w-full max-w-[1204px] md:flex-row">
                <p className="font-medium text-[16px] text-[#17171F] mb-[18px]">Valley Sales Inc.</p>
                <nav>
                    <ul className="flex items-center space-x-4 flex-wrap max-w-[320px] justify-center md:max-w-none">
                        {links.map(item => (
                            <li key={item} className="font-medium text-[16px] text-[#17171F] mb-2.5">
                                <Link href=''>{item}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default MainFooter;