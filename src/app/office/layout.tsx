
import React from 'react';



// export const metadata = {
//     title: 'Create Next App',
//     // description: 'Generated by create-nx-workspace',
// };

export default async function OfficeLayout({
    children,
}: {
    children?: React.ReactNode;

}) {



    return (
        <main className='officeWrapp'>
            {children}
        </main>
    );
}