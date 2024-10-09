'use client';
import React, { useEffect, useState } from 'react';
import { postGptRequest } from '@/app/utils';
import { recommand_hotel } from '@/app/constant';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '../ui/button';
import { FaRegCopy } from 'react-icons/fa6';
export default function Itinerary({ destination }) {
    const [message, setMessage] = useState('');
    const fetchMessage = async () => {
        try {
            const res = await postGptRequest({ content: `当前旅行的景点是${recommand_hotel?.[destination]}请根据上述内容给出智能行程单` });
            setMessage(res || '');
        } catch (error) {
            console.log(666, error);
        }
    };
    useEffect(() => {
        fetchMessage();
    }, []);

    const handleSubmit = () => {
        navigator.clipboard.writeText(message);
    };
    return (
        <div>
            <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                        Link
                    </Label>
                    <Textarea className="h-56" value={message || ''} readOnly />
                </div>
                <Button onClick={handleSubmit} size="sm" className="px-3">
                    <span className="sr-only">复制</span>
                    <FaRegCopy className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
