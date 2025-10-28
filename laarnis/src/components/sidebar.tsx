import React , { useState } from 'react';

type SidebarProps = { 
    children: React.ReactNode;
    width?: 'sm' | 'md' | 'lg' | 'full';
    position?: 'permanent' | 'temporary' | 'responsive'
    variant?: 'left' | 'right';
    bg?: string;
    textColor?: string;
    className?: string;
};




