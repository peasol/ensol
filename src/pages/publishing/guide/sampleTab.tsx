import {EsTabs, EsTabsContent, EsTabsList, EsTabsTrigger} from "@/components/ui/uiTabs.tsx"
import {EsDatePicker} from "@/components/ui/uiDatepicker.tsx";
import {Button} from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const sampleTab = () => {
	return (
		<>
			<div className="admin-container absolute top-[120px]">
				<h2 className="mb-[30px] font-semibold text-[22px]">관리자</h2>

				<EsTabs defaultValue="scheduleManagement" className="es-tabs tab-type-fill">
					<EsTabsList>
						<EsTabsTrigger className="tab-btn" value="scheduleManagement">스케쥴 관리</EsTabsTrigger>
						<EsTabsTrigger className="tab-btn" value="userManagement">사용자 관리</EsTabsTrigger>
						<EsTabsTrigger className="tab-btn" value="resourceManagement">자원 관리</EsTabsTrigger>
					</EsTabsList>

					<EsTabsContent className="search-container" value="scheduleManagement">
						<div className="datepicker-range-wrap w-[25%]">
							<EsDatePicker/> ~ <EsDatePicker/>
						</div>

						<Select>
							<SelectTrigger className="w-[50%]">
								<SelectValue placeholder="Workflow Name"/>
							</SelectTrigger>

							<SelectContent>
								<SelectItem value="work1">work1</SelectItem>
								<SelectItem value="work2">work2</SelectItem>
								<SelectItem value="work3">work3</SelectItem>
							</SelectContent>
						</Select>

						<div className="last-btn-wrap w-[25%]">
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Owner"/>
								</SelectTrigger>

								<SelectContent>
									<SelectItem value="work1">owner1</SelectItem>
									<SelectItem value="work2">owner2</SelectItem>
									<SelectItem value="work3">owner3</SelectItem>
								</SelectContent>
							</Select>

							<Button variant="default" className="btn-primary">Search</Button>
						</div>
					</EsTabsContent>

					<EsTabsContent value="userManagement">
						<div>
							<Select>
								<SelectTrigger className="w-[50%]">
									<SelectValue placeholder="All Roles"/>
								</SelectTrigger>

								<SelectContent>
									<SelectItem value="work1">Roles1</SelectItem>
									<SelectItem value="work2">Roles2</SelectItem>
									<SelectItem value="work3">Roles3</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</EsTabsContent>

					<EsTabsContent value="resourceManagement">자원 관리</EsTabsContent>
				</EsTabs>
			</div>
		</>
	)
}

export default sampleTab