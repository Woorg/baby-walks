'use client';

import { usePathname } from 'next/navigation';
import { useId, useRef, useState } from 'react';
// useState

const MainLayout = ({ children }) => {
	const panelId = useId();
	const pathName = usePathname();

	return (
		<main className="main" key={pathName}>
			{children}
		</main>
	);
};

export default MainLayout;
