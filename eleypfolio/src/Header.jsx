import { IconBrandGithubFilled } from '@tabler/icons-react';
import { IconBrandLinkedinFilled } from '@tabler/icons-react';
import { IconBrandFacebookFilled } from '@tabler/icons-react';
import { IconBrandInstagramFilled } from '@tabler/icons-react';
import { IconBrandTwitterFilled } from '@tabler/icons-react';

export default function Header() {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><a href="#"><IconBrandGithubFilled stroke ={2}/></a></li>
                    <li><a href="#"><IconBrandLinkedinFilled stroke={2} /></a></li>
                    <li><a href="#"><IconBrandFacebookFilled stroke={2} /></a></li>
                    <li><a href="#"><IconBrandInstagramFilled stroke={2} /></a></li>
                    <li><a href="#"><IconBrandTwitterFilled stroke={2} /></a></li>
                    
                </ul>
            </nav>
        </header>
        </>


    );
}