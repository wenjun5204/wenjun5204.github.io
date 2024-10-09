'use client';
import React, { useEffect, useState } from 'react';
import { Textarea } from '../ui/textarea';
import { postGptRequest } from '@/app/utils';

export default function Visa() {
    const [message, setMessage] = useState('');

    const fetchMessage = async () => {
        try {
            const res = await postGptRequest({ content: '请根据上述信息给出签证办理攻略' });
            setMessage(res || '');
        } catch (error) {
            console.log(666, error);
        }
    };
    useEffect(() => {
        fetchMessage();
    }, []);
    return (
        <div className=" h-40 text-highlight">
            <Textarea className="h-40" value={message || ''} readOnly />
        </div>
    );
}
