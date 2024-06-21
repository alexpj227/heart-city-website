import { useNavigate } from "react-router-dom";
import DrawerNav, { DRAWER_WIDTH } from "../drawer-nav/DrawerNav";
import { useState } from "react";
import { styled, useTheme } from '@mui/material/styles';
import DrawerHeader from "../drawer-nav/DrawerHeader";
import styles from './Layout.module.css';

const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'open'
})
    (({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
        /**
         * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
         * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
         * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
         * proper interaction with the underlying content.
         */
        position: 'relative',
    }));

function Layout({ children, selectedItem, handleScrollTo }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    function routeChange(path) {
        navigate(path);
    }

    return (
        <div className={styles.container}>
            <DrawerNav
                open={open}
                setOpen={setOpen}
                selectedItem={selectedItem}
                handleScrollTo={handleScrollTo}
            />
            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </div>
    );
}

export default Layout;