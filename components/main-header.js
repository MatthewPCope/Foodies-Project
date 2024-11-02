import Link from "next/link"
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'

const MainHeader = () => {
    return (
        <header>
            <Link className={classes.logo} href="/">
                <img src={logoImg.src} alt="plate with food" />
                NextLevel Food
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Food Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader