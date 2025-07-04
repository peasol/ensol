"use client";
import * as React from "react";
import {format} from "date-fns";
import {Calendar as CalendarIcon} from "lucide-react";
import {ko} from "date-fns/locale"; // 한국어 로케일 임포트

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export function EsDatePicker() {
	const [date, setDate] = React.useState<Date | undefined>(undefined);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"min-w-[170px] justify-start text-left font-normal",
						!date && "text-muted-foreground"
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4"/> {/* 달력 아이콘 */}
					{date ? format(date, "yyyy-MM-dd", {locale: ko}) : (
						<span>날짜를 선택하세요</span>
					)}
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					locale={ko}
				/>
			</PopoverContent>
		</Popover>
	);
}