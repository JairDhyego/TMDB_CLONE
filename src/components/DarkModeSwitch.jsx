'use client';
import { useEffect, useState, useMemo } from 'react';
import { useTheme } from 'next-themes';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdLightMode } from 'react-icons/md';

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = useMemo(
    () => (theme === 'system' ? systemTheme : theme),
    [systemTheme, theme]
  );

  return (
    <>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme('light')}
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme('dark')}
          />
        ))}
    </>
  );
};

export default DarkModeSwitch;
