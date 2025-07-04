"use client"
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import {cn} from "@/lib/utils"

function EsTabs({className, ...props}: React.ComponentProps<typeof TabsPrimitive.Root>) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={cn(className)}
			{...props}
		/>
	)
}

function EsTabsList({className, ...props}: React.ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn(
				"tab-list",
				className
			)}
			{...props}
		/>
	)
}

function EsTabsTrigger({className, ...props}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cn(className)}
			{...props}
		/>
	)
}

function EsTabsContent({className, ...props}: React.ComponentProps<typeof TabsPrimitive.Content>) {
	return (
		<TabsPrimitive.Content
			data-slot="tabs-content"
			className={cn("flex-1 outline-none", className)}
			{...props}
		/>
	)
}

export {EsTabs, EsTabsList, EsTabsTrigger, EsTabsContent}