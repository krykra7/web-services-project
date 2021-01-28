import React, {useState} from "react";
import {ShopIndustryDto} from "../../dto/ShopIndustryDto";
import {ShopProductDto} from "../../dto/ShopProductDto";
import {ProductDto} from "../../dto/ProductDto";
import {
    IconButton,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Theme,
    Tooltip
} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import AppAutocomplete from "./AppAutocomplete";
import {OptionDto} from "../../dto/OptionDto";

const useStyles = makeStyles((theme: Theme) => ({
    tableContainer: {
        width: '100%',
        padding: 0,
    }
}))

type Props = {
    addHandler: (itemData: ShopProductDto) => void;
    items: ShopProductDto[]
}

export default function RelationTable(props: Props) {
    const classes = useStyles();
    const [currentNewId, setCurrentNewId] = useState(1);
    const [autocompleteSource, setAutocompleteSource] = useState([] as OptionDto[]);

    const rowWrapper = (itemData: { index: number, data: ShopProductDto }) => {
        return (
            <TableRow key={itemData.index}>
                <TableCell align={"center"} component={"th"}>{itemData.index + 1}.</TableCell>
                <TableCell align={"center"}>
                    <AppAutocomplete name={"name"}
                                     source={autocompleteSource}
                                     index={itemData.index}
                                     onChange={handleShopChange}/>
                </TableCell>
            </TableRow>
        );
    }

    const handleShopChange = (index: number, value: OptionDto[]) => {

    }

    const handleAddNew = () => {
        props.addHandler({
            id: `new-${currentNewId}`
        } as ShopProductDto)

        setCurrentNewId((prevState) => ++prevState);
    }

    return (
        <TableContainer className={classes.tableContainer}>
            <Table size={"small"}>
                <TableHead>
                    <TableRow>
                        <TableCell align={"center"}>Nr.</TableCell>
                        <TableCell align={"center"}>Sklep</TableCell>
                        <TableCell align={"center"}>Cena</TableCell>
                        <TableCell>
                            <Tooltip title={"Dodaj produkt"}>
                                <IconButton onClick={handleAddNew}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.items.map(
                        (item, index) => {
                            return (
                                rowWrapper({index: index, data: item})
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}