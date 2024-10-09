'use client';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';

export default function TodoList() {
    const [value, setValue] = useState([20]);
    const handleChange = (value) => {
        setValue(value);
    };
    return (
        <div>
            <div className="flex justify-between w-full h-6 text-blue-600">
                <Slider className="w-3/4" value={value} onValueChange={handleChange} defaultValue={[33]} max={100} step={1} />
                <span>{value}%</span>
            </div>

            <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">办签证</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">订酒店</Label>
                </div>
            </RadioGroup>
        </div>
    );
}
