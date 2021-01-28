import React, {useState} from "react";
import {ProductDto} from "../../dto/ProductDto";
import {
    IconButton,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Theme,
    Tooltip
} from "@material-ui/core";
import {Add} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
    tableContainer: {
        width: '100%',
        padding: 0,
    }
}))

type Props = {
    productList: ProductDto[];
    addProductHandler: (productDto: ProductDto) => void;
    changeProductHandler: (index: number, propName: string, value: string) => void;
    mode: string;
}

export default function ShoppingListCardContent(props: Props) {
    const [currentNewId, setCurrentNewId] = useState(1);
    const classes = useStyles();

    const onAddNewClick = () => {
        props.addProductHandler({
            id: `new-${currentNewId}`,
        } as ProductDto)
        setCurrentNewId((prevState) => ++prevState);
    }

    const determineReadOnly = () => {
        return props.mode === 'readonly';
    }

    const TableRowWrapper = (itemData: { index: number, productDto: ProductDto }) => {
        return (
            <TableRow key={itemData.index}>
                <TableCell align={"center"} component={"th"}>{itemData.index + 1}.</TableCell>
                <TableCell align={"center"}>
                    <TextField
                        multiline
                        placeholder="Nazwa"
                        variant="outlined"
                        inputProps={{readOnly: determineReadOnly(), disabled: determineReadOnly()}}
                        value={itemData.productDto.name}
                        onChange={(event) => {
                            props.changeProductHandler(itemData.index, 'name', event.target.value)
                        }}
                    />
                </TableCell>
            </TableRow>
        );
    };

    return (
        <TableContainer className={classes.tableContainer}>
            <Table size={"small"}>
                <TableHead>
                    <TableRow>
                        <TableCell align={"center"}>Nr.</TableCell>
                        <TableCell align={"center"}>Nazwa</TableCell>
                        {!determineReadOnly() &&
                        <TableCell align={"center"}>
                            <Tooltip title={"Dodaj produkt"}>
                                <IconButton onClick={onAddNewClick}>
                                    <Add/>
                                </IconButton>
                            </Tooltip>
                        </TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.productList.map(
                        (productDto, index) => {
                            return (
                                TableRowWrapper({index, productDto})
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}