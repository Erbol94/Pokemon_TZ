import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Radio, Typography } from '@mui/material';
import React from 'react';

const Filters = () => {

    return (
        <div>
            <Accordion style={{marginTop:'32px'}} >
                <AccordionSummary>
                    <Typography>Поколение</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                    <FormControlLabel control={<Radio />} label="1-e" />
                    <FormControlLabel control={<Radio />} label="2-e" />
                    <FormControlLabel control={<Radio />} label="3-e" />
                    <FormControlLabel control={<Radio />} label="4-e" />
                    <FormControlLabel control={<Radio />} label="5-e" />
                    <FormControlLabel control={<Radio />} label="6-e" />
                    <FormControlLabel control={<Radio />} label="7-e" />
                    <FormControlLabel control={<Radio />} label="8-e" />
                    <FormControlLabel control={<Radio />} label="9-e и новее" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography>Физические</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Физический" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography>Специальные</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Специальный" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Filters;