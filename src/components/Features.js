import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import todo from '../assets/images/icon-todo.svg'
import calendar from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <button className='nav-button'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Features
            </button>
            <Menu
                className='nav-dropdown'
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><img className="nav-icons" src={todo} alt="" />Todo List</MenuItem>
                <MenuItem onClick={handleClose}><img className="nav-icons" src={calendar} alt="" />Calendar</MenuItem>
                <MenuItem onClick={handleClose}><img className="nav-icons" src={reminders} alt="" />Reminders</MenuItem>
                <MenuItem onClick={handleClose}><img className="nav-icons" src={planning} alt="" />Planning</MenuItem>
            </Menu>
        </div>
    );
}