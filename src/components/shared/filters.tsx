import { Input } from "../ui/input"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { FilterCheckbox } from "./filter-checkbox"
import { RangeSlider } from "./range-slider"

export const Filters = () => {

    return (
        <div>
            <h3 className="text-2xl font-bold mb-7.5">Filtration</h3>
            <div className="mb-11.5 flex flex-col gap-y-3.5">
                <FilterCheckbox text="Can be collected" value='1'  />
                <FilterCheckbox text="New items" value='2'  />
            </div>
            <div>
                <h3 className="font-bold mb-3.5">Price from and to:</h3>
                <div className="inline-flex gap-x-3.5 mb-8">
                    <Input type="number" min={0} max={1000} placeholder="0" defaultValue={0} />
                    <Input type="number" min={100} max={10000} placeholder="10000" />
                </div>
                <RangeSlider min={0} max={10000} className="mb-15" />
                <CheckboxFiltersGroup
                    title="Ingredients:"
                    limit={3}
                />
            </div>
        </div>
    )
}