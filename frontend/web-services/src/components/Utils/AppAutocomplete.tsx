import {Autocomplete} from "@material-ui/lab";
import React from "react";
import {OptionDto} from "../../dto/OptionDto";
import {TextField} from "@material-ui/core";

type Props = {
    name: string;
    source: OptionDto[];
    index: number;
    onChange: (index: number, value: OptionDto[]) => void;
}

export default function AppAutocomplete(props: Props) {
    return (
        <Autocomplete
            id={props.name}
            options={props.source}
            getOptionLabel={(option) => option.title}
            onChange={(event, value: string | OptionDto) => {
                console.log(value);
            }}
            renderInput={(params) => (
                <TextField {...params} label={props.name} variant="outlined"/>
            )}
        />
    )
}
