import bycrpt from 'bcrypt';

import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    console.log('register', request)
    try {
        const body = await request.json();
        console.log('body', body)
        const {
            name,
            email,
            password
        } = body;

        if(!email || !name || !password) {
            return new NextResponse('info is missing', { status: 400})
        }
        const hashedPassword = await bycrpt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword
            }
        });
        console.log('register', user)
        return NextResponse.json(user);
    } catch(err) {
        console.log(err, 'REGISTRATION_ERROR');
        return new NextResponse('Internal Error', { status: 500 });
    }
} 