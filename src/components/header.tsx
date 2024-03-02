'use client'

import Image from "next/image";
import profilePic from '@/assets/image.png'
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { Input } from "./ui/input";

interface MainHeaderProps {

}

const MainHeader: React.FunctionComponent<MainHeaderProps> = () => {

    const pages = ['Dashboard', 'Messages', 'Campaigns', 'Studio']

    return (
        <header className="flex items-center justify-between py-6 px-5 w-full h-[92px] space-x-6 md:p-7">
            <div className="flex items-center flex-grow justify-between md:flex-grow-0 md:space-x-10">
                <div className="flex items-center">
                    <Button className="bg-transparent p-0 mr-2 hover:bg-transparent md:hidden">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.90002 4.79999H20.1V6.59999H3.90002V4.79999ZM3.90002 11.1H20.1V12.9H3.90002V11.1ZM3.90002 17.4H20.1V19.2H3.90002V17.4Z" fill="#17171F" fillOpacity="0.6" />
                        </svg>
                    </Button>
                    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.26941 0.763611L14.2368 8.73099L11.4939 11.6045L7.83676 15.3922H0V11.6045H11.4939L3.39593 3.63709L6.26941 0.763611Z" fill="#17171F" />
                        <path d="M25.7306 0.763611L17.7632 8.73099L20.5061 11.6045L24.1632 15.3922H32V11.6045H20.5061L28.6041 3.63709L25.7306 0.763611Z" fill="#17171F" />
                        <path d="M3.39581 23.0977L16.0652 10.5588L28.7347 23.0977L25.9918 25.8405L18.0244 18.0038V29.2365H13.9754V18.0038L6.13868 25.8405L3.39581 23.0977Z" fill="#17171F" />
                    </svg>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center py-1.5 pr-3 pl-1.5 border-[1px] border-[rgba(23, 23, 31, 0.1)] rounded-[100px]">
                        <div className="relative">
                            <Image src={profilePic} alt="profile" width={40} height={40} className="w-10 h-10 rounded-[50%]" />
                            <div className="absolute w-1.5 h-1.5 rounded-[50%] bg-[#D5FAF1] z-10 top-[27px] left-[31px]">
                                <div className="w-1.5 h-1.5 rounded-[50%] bg-[#439288]">

                                </div>
                            </div>
                        </div>
                        <p className="ml-3 mr-0.5 font-medium">Keshav</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13.0548L16.455 8.59979L17.7276 9.87239L12 15.6L6.2724 9.87239L7.545 8.59979L12 13.0548Z" fill="#17171F" fillOpacity="0.6" />
                        </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <nav className="hidden md:block">
                <ul className="flex items-center space-x-4 font-medium text-4 text-[#17171F99]">
                    {pages.map(item => (
                        <li key={item}>
                            <Link href=''>{item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center space-x-6">
                <Button className="bg-transparent p-0 hover:bg-transparent">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                        <path d="M17.4 10.2C17.4 8.76783 16.8311 7.39432 15.8184 6.38162C14.8057 5.36893 13.4322 4.8 12 4.8C10.5678 4.8 9.19432 5.36893 8.18162 6.38162C7.16893 7.39432 6.6 8.76783 6.6 10.2V17.4H17.4V10.2ZM19.2 18.0003L19.56 18.48C19.6101 18.5469 19.6407 18.6264 19.6482 18.7096C19.6557 18.7928 19.6399 18.8765 19.6025 18.9512C19.5651 19.026 19.5077 19.0889 19.4366 19.1328C19.3655 19.1767 19.2836 19.2 19.2 19.2H4.8C4.71643 19.2 4.63451 19.1767 4.56342 19.1328C4.49233 19.0889 4.43488 19.026 4.39751 18.9512C4.36013 18.8765 4.34431 18.7928 4.35182 18.7096C4.35932 18.6264 4.38986 18.5469 4.44 18.48L4.8 18.0003V10.2C4.8 8.29044 5.55857 6.45909 6.90883 5.10883C8.25909 3.75857 10.0904 3 12 3C13.9096 3 15.7409 3.75857 17.0912 5.10883C18.4414 6.45909 19.2 8.29044 19.2 10.2V18.0003ZM9.75 20.1H14.25C14.25 20.6967 14.0129 21.269 13.591 21.691C13.169 22.1129 12.5967 22.35 12 22.35C11.4033 22.35 10.831 22.1129 10.409 21.691C9.98705 21.269 9.75 20.6967 9.75 20.1Z" fill="#17171F" fillOpacity="0.4" />
                    </svg>
                </Button>
                <Button className="bg-transparent p-0 hover:bg-transparent">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                        <path d="M14.25 3.00003C14.7816 2.99985 15.3046 3.1342 15.7702 3.39056C16.2359 3.64693 16.6291 4.01698 16.9133 4.46625C17.1974 4.91551 17.3633 5.42938 17.3953 5.96C17.4274 6.49061 17.3247 7.02071 17.0967 7.50093L20.1 7.50003C20.3387 7.50003 20.5676 7.59485 20.7364 7.76363C20.9052 7.93242 21 8.16133 21 8.40003V12C21 12.2387 20.9052 12.4676 20.7364 12.6364C20.5676 12.8052 20.3387 12.9 20.1 12.9H19.2V20.1C19.2 20.3387 19.1052 20.5676 18.9364 20.7364C18.7676 20.9052 18.5387 21 18.3 21H5.7C5.46131 21 5.23239 20.9052 5.0636 20.7364C4.89482 20.5676 4.8 20.3387 4.8 20.1V12.9H3.9C3.66131 12.9 3.43239 12.8052 3.2636 12.6364C3.09482 12.4676 3 12.2387 3 12V8.40003C3 8.16133 3.09482 7.93242 3.2636 7.76363C3.43239 7.59485 3.66131 7.50003 3.9 7.50003L6.9033 7.50093C6.58268 6.82743 6.51146 6.06201 6.70233 5.34093C6.8932 4.61984 7.33376 3.98989 7.94559 3.56321C8.55742 3.13652 9.30081 2.9408 10.0434 3.01089C10.786 3.08097 11.4797 3.41232 12.0009 3.94593C12.2934 3.6458 12.6432 3.40744 13.0296 3.24496C13.4159 3.08248 13.8309 2.99919 14.25 3.00003ZM17.4 12.9H6.6V19.2H17.4V12.9ZM19.2 9.30003H4.8V11.1H19.2V9.30003ZM9.75 4.80003C9.4033 4.8002 9.06996 4.93375 8.81905 5.173C8.56814 5.41225 8.41889 5.73886 8.40223 6.08515C8.38557 6.43145 8.50277 6.77088 8.72956 7.03311C8.95634 7.29534 9.27532 7.46027 9.6204 7.49373L9.75 7.50003H11.1V6.15003C11.1 5.81443 10.975 5.49088 10.7493 5.24245C10.5237 4.99403 10.2136 4.83854 9.8796 4.80633L9.75 4.80003ZM14.25 4.80003L14.1204 4.80633C13.8084 4.83622 13.5166 4.97371 13.2949 5.19523C13.0732 5.41675 12.9355 5.70849 12.9054 6.02043L12.9 6.15003V7.50003H14.25L14.3796 7.49373C14.7135 7.46135 15.0234 7.30581 15.2489 7.0574C15.4744 6.80899 15.5993 6.48552 15.5993 6.15003C15.5993 5.81454 15.4744 5.49107 15.2489 5.24266C15.0234 4.99425 14.7135 4.8387 14.3796 4.80633L14.25 4.80003Z" fill="#17171F" fillOpacity="0.4" />
                    </svg>
                </Button>
                <Input type="search" placeholder="Search..." className="hidden md:block" />
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden">
                    <path d="M9.25 2.5C12.976 2.5 16 5.524 16 9.25C16 12.976 12.976 16 9.25 16C5.524 16 2.5 12.976 2.5 9.25C2.5 5.524 5.524 2.5 9.25 2.5ZM9.25 14.5C12.1502 14.5 14.5 12.1502 14.5 9.25C14.5 6.349 12.1502 4 9.25 4C6.349 4 4 6.349 4 9.25C4 12.1502 6.349 14.5 9.25 14.5ZM15.6137 14.5532L17.7355 16.6742L16.6742 17.7355L14.5532 15.6137L15.6137 14.5532Z" fill="#17171F" fillOpacity="0.6" />
                </svg>
            </div>
        </header>
    );
}

export default MainHeader;