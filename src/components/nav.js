"use client"
import Link from 'next/link';
import styles from '@/css/nav.module.css';
import { useState, useEffect } from 'react';
import { Home, Close } from '@mui/icons-material';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu'; // メニューアイコンをインポート


import {
    Box, Button, Drawer, List, ListItem, ListItemButton,
    ListItemText, ListItemIcon, IconButton
} from '@mui/material';

const menu = [
    { title: 'Home', href: '/', icon: Home },
    { title: 'About', href: '/about', icon: AccountBoxIcon },
    { title: 'Work', href: '/work', icon: LaptopChromebookIcon },
    { title: 'Gallery', href: '/gallery', icon: ColorLensIcon },
    { title: 'Blog', href: '/blog', icon: AutoStoriesIcon },
];

export default function Nav() {

    const [show, setShow] = useState(false);
    //モバイルかどうかを判定するためのStateです 最初はfalseにします
    const [isMobile, setIsMobile] = useState(false);

    const handleDraw = () => setShow(!show);

    useEffect(() => {
        const updateMedia = () => {
            //850px未満の時、isMobileステートをオンにする
            setIsMobile(window.innerWidth < 850);
        };
        //resizeイベントが起きた時、update関数用をよぶ
        window.addEventListener('resize', updateMedia);
        updateMedia(); // Initial check
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    return (
        <div>
            {isMobile && (
                <Button onClick={handleDraw}
                variant="contained"
                className={styles.toggleMenuButton}>
                <MenuIcon /> {/* メニューアイコンを追加 */}
            </Button>
            )}
            <Drawer anchor="right" open={show}>
                <Box sx={{ width: 250, height: '100%', bgcolor: 'rgba(255, 192, 203, 0.7)' }}>
                    <IconButton onClick={handleDraw} sx={{ justifyContent: 'flex-end', display: 'block' }}>
                        <Close />
                    </IconButton>
                    <List>
                        {menu.map(obj => {
                            const Icon = obj.icon;
                            return (
                                <ListItem key={obj.title} disablePadding>
                                    <ListItemButton href={obj.href}>
                                        <ListItemIcon><Icon /></ListItemIcon>
                                        <ListItemText primary={obj.title} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
            <div className={styles.headersiteMenu}>
                <nav className={styles.siteMenu}>
                    <ul className={styles.list}>
                        <li>
                            <Link href="/" passHref>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" passHref>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/work" passHref>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link href="/gallery" passHref>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" passHref>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
