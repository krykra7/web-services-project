import React, {useState} from "react";
import {ProductDto} from "../../dto/ProductDto";
import {Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, makeStyles} from "@material-ui/core";
import {AppTextField} from "../Utils";
import {ShopProductDto} from "../../dto/ShopProductDto";
import {ShopDto} from "../../dto/ShopDto";

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        width: '100%',
        padding: 0,
    }
}))

type Props = {
    saveHandler: (shopDto: ShopDto) => void;
    cancelHandler: () => void;
    data?: ProductDto;
}

export default function ShopForm(props: Props) {
    const classes = useStyles();
    const [shopData, setShopDto] = useState({shopProductDtoList: [], shopIndustryDtoList: []} as ShopDto)

    const handleProductDataChange = (fieldName: string, fieldValue: string | ShopProductDto[]) => {
        setShopDto({...shopData, [fieldName]: fieldValue});
    }

    const handleSave = () => {
        props.saveHandler(shopData);
        setShopDto({shopProductDtoList: [], shopIndustryDtoList: []} as ShopDto);
    }

    const handleCancel = () => {
        setShopDto({shopProductDtoList: [], shopIndustryDtoList: []} as ShopDto);
        props.cancelHandler();
    }

    return (
        <Card>
            <CardHeader title="Dane sklepu"/>
            <Divider/>
            <CardContent>
                <Grid container spacing={2} alignItems={"stretch"}>
                    <Grid item xs={12} sm={4} md={3}>
                        <AppTextField
                            label={"Nazwa"}
                            name={"name"}
                            value={shopData.name}
                            onChange={handleProductDataChange}
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small"
                        onClick={handleCancel}>
                    Anuluj
                </Button>
                <Button size="small"
                        variant="outlined"
                        color="primary"
                        onClick={handleSave}>
                    Zapisz
                </Button>
            </CardActions>
        </Card>
    )
}