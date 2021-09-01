/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function CustomSearchInput(props) {
  const [value, setValue] = React.useState(null);
  const searchHandler = props.searchHandler;

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        searchHandler(newValue.id);
        if (typeof newValue === 'string') {
          setValue({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            name: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        // if (params.inputValue !== '') {
        //   filtered.push({
        //     inputValue: params.inputValue,
        //     title: `Add "${params.inputValue}"`,
        //   });
        // }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Films}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(option) => option.name}
      style={{ width: "100%" }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search..." variant="outlined" size="small" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  {
      "id": "OEO_00000001",
      "name": "fuel role",
      "description": [
        "A fuel role is a role of a portion of matter that has the disposition to be an energy carrier and is used in a process that releases the carried energy by transforming the portion of matter into a different kind of portion of matter in a way that releases heat or does work."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000023",
      "name": "role",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: One major family of examples of non-rigid universals involves roles, and ontologies developed for corresponding administrative purposes may consist entirely of representatives of entities of this sort. Thus ‘professor’, defined as follows,b instance_of professor at t =Def. there is some c, c instance_of professor role & c inheres_in b at t.denotes a non-rigid universal and so also do ‘nurse’, ‘student’, ‘colonel’, ‘taxpayer’, and so forth. (These terms are all, in the jargon of philosophy, phase sortals.) By using role terms in definitions, we can create a BFO conformant treatment of such entities drawing on the fact that, while an instance of professor may be simultaneously an instance of trade union member, no instance of the type professor role is also (at any time) an instance of the type trade union member role (any more than any instance of the type color is at any time an instance of the type length).If an ontology of employment positions should be defined in terms of roles following the above pattern, this enables the ontology to do justice to the fact that individuals instantiate the corresponding universals –  professor, sergeant, nurse – only during certain phases in their lives."
      ]
    },
    {
      "id": "OEO_00000003",
      "name": "biofuel power unit",
      "description": [
        "A biofuel power unit is a power generating unit using biofuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000334",
      "name": "power generating unit",
      "description": [
        "A power generating unit is an artificial object that contains a generator, among other parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000004",
      "name": "biogas powerplant",
      "description": [
        "A biogas powerplant is a biofuel powerplant that has biogas power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000073",
      "name": "biofuel powerplant",
      "description": [
        "A biofuel powerplant is a powerplant that has biofuel power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000005",
      "name": "biogas power unit",
      "description": [
        "A biogas power unit is a biofuel power unit using biogas as fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000006",
      "name": "carbon dioxide",
      "description": [
        "Carbon dioxide is a portion of matter with the chemical formula CO2. It has a gaseous normal state of matter. It occurs naturally in the atmosphere as a trace gas and can work as a greenhouse gas."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000331",
      "name": "portion of matter",
      "description": [
        "A portion of matters is an aggregate of material entities that have a state of matter."
      ],
      "editor_note": [
        "Portions of matter describe mass nouns like e.g. water, air and fuel. Mass nouns are uncountable, but portions of these can be quantified, like 1 glass of water, 1 m³ of air or 1 barrel of fuel. For further explanation please refer to: https://github.com/OpenEnergyPlatform/ontology/wiki/Explanation-on-mass-nouns"
      ]
    },
    {
      "id": "OEO_00000007",
      "name": "chemical energy",
      "description": [
        "Chemical energy is energy that is stored in the chemical bonds of a substance, which can be released by a chemical reaction."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000150",
      "name": "energy",
      "description": [
        "Energy is a quality of matter which manifests as a capacity to perform work (such as causing motion or the interaction of molecules)"
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000008",
      "name": "coal power unit",
      "description": [
        "A coal power unit is a power generating unit using coal as fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000009",
      "name": "electric heat pump",
      "description": [
        "An electric heat pump is a heat pump that uses electrical energy as drive energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000212",
      "name": "heat pump",
      "description": [
        "A heat pump is a heater that transforms low temperature heat to high temperature heat using external energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000010",
      "name": "electro motive generator",
      "description": [
        "An electro motive generator is a generator that converts kinetic energy into electric energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000188",
      "name": "generator",
      "description": [
        "A generator is an energy converting device that converts other forms of energy into electrical energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000011",
      "name": "energy converting device",
      "description": [
        "An energy converting device is an artificial object that transforms or changes a certain type of energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000061",
      "name": "artificial object",
      "description": [
        "An artificial object is an object that was deliberately manufactured by humans to address a particular purpose."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000012",
      "name": "energy storage",
      "description": [
        "Energy storage is a function of an artificial object that has been engineered to contain energy for conversion as usable energy later."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000151",
      "name": "energy carrier disposition",
      "description": [
        "An energy carrier disposition is a disposition of an material entity that contains energy for conversion as usable energy."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000034",
      "name": "function",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: In the past, we have distinguished two varieties of function, artifactual function and biological function. These are not asserted subtypes of BFO:function however, since the same function – for example: to pump, to transport – can exist both in artifacts and in biological entities. The asserted subtypes of function that would be needed in order to yield a separate monoheirarchy are not artifactual function, biological function, etc., but rather transporting function, pumping function, etc."
      ]
    },
    {
      "id": "OEO_00000013",
      "name": "fluorinated greenhouse gas",
      "description": [
        "A fluorinated greenhouse gas is a greenhouse gas that is produced by fluorination. Hence it contains Fluor (F) atoms and is of anthropogenic origin."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000020",
      "name": "greenhouse gas",
      "description": [
        "A greenhouse gas is a portion of matter that has the disposition to contribute to the greenhouse effect."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000016",
      "name": "fuel cell",
      "description": [
        "A fuel cell is a generator that converts chemical energy into electricity using redox reactions."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000017",
      "name": "gas fired power unit",
      "description": [
        "A gas fired power unit is a power generating unit using gas as fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000019",
      "name": "geothermal power unit",
      "description": [
        "A geothermal power unit is a power unit using geothermal heat."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000021",
      "name": "hard coal power unit",
      "description": [
        "A hard coal power unit is a coal power unit using hard coal as fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000022",
      "name": "hydrogen power unit",
      "description": [
        "A hydrogen power unit is a power generating unit using hydrogen as fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000024",
      "name": "lignite power unit",
      "description": [
        "A lignite power unit is a coal power unit using lignite as fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000025",
      "name": "methane",
      "description": [
        "Methane is a portion of matter with the chemical formular CH4. It has a gaseous normal state of matter. It occurs naturally in the atmosphere as a trace gas and can work as a greenhouse gas. As it can be oxidised it can be used as a fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000026",
      "name": "nitrogen trifluoride",
      "description": [
        "Nitrogen trifluoride is a portion of matter with the chemical formula NF3. It has a gaseous normal state of matter. It can work as a potent greenhouse gas and has an anthropogenic origin."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000027",
      "name": "nitrous oxide",
      "description": [
        "Nitrous oxide is a portion of matter with the chemical formula N2O. It has a gaseous normal state of matter. It occurs naturally in the atmosphere as a trace gas and it can work as a greenhouse gas."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000028",
      "name": "nuclear energy carrier disposition",
      "description": [
        "A nuclear energy carrier is an energy carrier used in nuclear power stations to produce heat for steam turbines. Heat is created when the nuclear fuel undergoes nuclear fission."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000029",
      "name": "nuclear power unit",
      "description": [
        "A nuclear power unit is a power generating unit using nuclear fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000030",
      "name": "oil power unit",
      "description": [
        "An oil power unit is a power generating unit using oil as fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000031",
      "name": "powerplant",
      "description": [
        "A powerplant is an artificial object consisting of power generating units and a grid component that feeds electric energy into an electric grid."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000032",
      "name": "PV cell",
      "description": [
        "A PV cell is a generator that converts light into electrical energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000034",
      "name": "solar power unit",
      "description": [
        "A solar power unit is a power generating unit using solar power."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000035",
      "name": "solar thermal power unit",
      "description": [
        "A solar thermal power unit is a solar power unit that has solar thermal collectors as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000036",
      "name": "solid biomass powerplant",
      "description": [
        "A solid biomass powerplant is a biofuel powerplant that has solid biomass power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000037",
      "name": "solid biomass power unit",
      "description": [
        "A solid biomass power unit is a biomass power unit using solid biomass as fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000038",
      "name": "sulphur hexafluoride",
      "description": [
        "Sulphur hexafluoride is a portion of matter with the chemical formula SF6. It has a gaseous normal state of matter. It can work as a potent greenhouse gas and has an anthropogenic origin."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000039",
      "name": "thermal energy storage",
      "description": [
        "A thermal energy storage is an energy storage that stores thermal energy for later use."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000040",
      "name": "uranium",
      "description": [
        "Uranium is a portion of matter that has the atomic number 92. It is a silver-grey metal."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000041",
      "name": "waste power unit",
      "description": [
        "A waste power unit is a power generating unit using waste as fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000042",
      "name": "waste role",
      "description": [
        "A waste role is a role of an object aggregate that has been discarded after primary use."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000043",
      "name": "wind",
      "description": [
        "Wind is a process of air naturally moving."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000015",
      "name": "process",
      "description": [
        "p is a process = Def. p is an occurrent that has temporal proper parts and for some time t, p s-depends_on some material entity at t. (axiom label in BFO2 Reference: [083-003])"
      ],
      "editor_note": [
        "BFO 2 Reference: The realm of occurrents is less pervasively marked by the presence of natural units than is the case in the realm of independent continuants. Thus there is here no counterpart of ‘object’. In BFO 1.0 ‘process’ served as such a counterpart. In BFO 2.0 ‘process’ is, rather, the occurrent counterpart of ‘material entity’. Those natural – as contrasted with engineered, which here means: deliberately executed – units which do exist in the realm of occurrents are typically either parasitic on the existence of natural units on the continuant side, or they are fiat in nature. Thus we can count lives; we can count football games; we can count chemical reactions performed in experiments or in chemical manufacturing. We cannot count the processes taking place, for instance, in an episode of insect mating behavior.Even where natural units are identifiable, for example cycles in a cyclical process such as the beating of a heart or an organism’s sleep/wake cycle, the processes in question form a sequence with no discontinuities (temporal gaps) of the sort that we find for instance where billiard balls or zebrafish or planets are separated by clear spatial gaps. Lives of organisms are process units, but they too unfold in a continuous series from other, prior processes such as fertilization, and they unfold in turn in continuous series of post-life processes such as post-mortem decay. Clear examples of boundaries of processes are almost always of the fiat sort (midnight, a time of death as declared in an operating theater or on a death certificate, the initiation of a state of war)"
      ]
    },
    {
      "id": "OEO_00000044",
      "name": "wind energy converting unit",
      "description": [
        "A wind energy converting unit is a power generating unit that uses wind energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000045",
      "name": "producer",
      "description": [
        "A producer is an agent that makes goods."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000051",
      "name": "agent",
      "description": [
        "Agent is a role of a person or organisation that directs its activity towards achieving goals."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000047",
      "name": "AC-line",
      "description": [
        "An AC-line is a powerline for transferring high voltage alternating current."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000253",
      "name": "power line",
      "description": [
        "A powerline is a grid component that is an uninterrupted transmission system between two nodes in an electricity grid."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000048",
      "name": "acronym",
      "description": [
        "An acronym is an abbreviation of the title by using the first letters of each part of the title."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_0000028",
      "name": "symbol",
      "description": [
        "An information content entity that is a mark(s) or character(s) used as a conventional representation of another entity."
      ],
      "editor_note": [
        "20091104, MC: this needs work and will most probably change",
        "2014-03-31: We would like to have a deeper analysis of 'mark' and 'sign' in the future (see https://github.com/information-artifact-ontology/IAO/issues/154)."
      ]
    },
    {
      "id": "OEO_00000054",
      "name": "air",
      "description": [
        "Air is a portion of matter that consists of a composition of gases that forms the Earth's atmosphere."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000055",
      "name": "air pollution",
      "description": [
        "Air pollution occurs when harmful or excessive quantities of substances including gases, particles, and biological molecules are introduced into Earth's atmosphere."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000330",
      "name": "pollution",
      "description": [
        "Pollution is an emission with a negative effect on the environment or organisms."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000056",
      "name": "ambient thermal energy",
      "description": [
        "Ambient thermal energy is thermal energy that is stored in the ambient air, beneath the surface of solid earth or in surface water. It is captured by heat pumps."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000207",
      "name": "thermal energy",
      "description": [
        "Thermal energy is the energy that a material entity contains in the undirected motion of its constituent parts (e.g. molecules and atoms)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000058",
      "name": "anthracite",
      "description": [
        "Anthracite is a hard coal with a high caloric value due to its high carbon content (about 90 % fixed carbon)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000204",
      "name": "hard coal",
      "description": [
        "Hard coal is coal with a gross calorific value greater than 23 865 kJ/kg (5 700 kcal/kg) on an ashfree but moist basis and with a mean random reflectance of vitrinite of at least 0,6."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000059",
      "name": "API",
      "description": [
        "An API (Application Programming interface) is a software interface allowing two Software applications to communicate with each other."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000239",
      "name": "software interface",
      "description": [
        "A software interface is a software that enables an agent to interact with it."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000030",
      "name": "object",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: an object is a maximal causally unified material entity",
        "BFO 2 Reference: BFO rests on the presupposition that at multiple micro-, meso- and macroscopic scales reality exhibits certain stable, spatially separated or separable material units, combined or combinable into aggregates of various sorts (for example organisms into what are called ‘populations’). Such units play a central role in almost all domains of natural science from particle physics to cosmology. Many scientific laws govern the units in question, employing general terms (such as ‘molecule’ or ‘planet’) referring to the types and subtypes of units, and also to the types and subtypes of the processes through which such units develop and interact. The division of reality into such natural units is at the heart of biological science, as also is the fact that these units may form higher-level units (as cells form multicellular organisms) and that they may also form aggregates of units, for example as cells form portions of tissue and organs form families, herds, breeds, species, and so on. At the same time, the division of certain portions of reality into engineered units (manufactured artifacts) is the basis of modern industrial technology, which rests on the distributed mass production of engineered parts through division of labor and on their assembly into larger, compound units such as cars and laptops. The division of portions of reality into units is one starting point for the phenomenon of counting.",
        "BFO 2 Reference: Each object is such that there are entities of which we can assert unproblematically that they lie in its interior, and other entities of which we can assert unproblematically that they lie in its exterior. This may not be so for entities lying at or near the boundary between the interior and exterior. This means that two objects – for example the two cells depicted in Figure 3 – may be such that there are material entities crossing their boundaries which belong determinately to neither cell. Something similar obtains in certain cases of conjoined twins (see below).",
        "BFO 2 Reference: To say that b is causally unified means: b is a material entity which is such that its material parts are tied together in such a way that, in environments typical for entities of the type in question,if c, a continuant part of b that is in the interior of b at t, is larger than a certain threshold size (which will be determined differently from case to case, depending on factors such as porosity of external cover) and is moved in space to be at t at a location on the exterior of the spatial region that had been occupied by b at t, then either b’s other parts will be moved in coordinated fashion or b will be damaged (be affected, for example, by breakage or tearing) in the interval between t and t.causal changes in one part of b can have consequences for other parts of b without the mediation of any entity that lies on the exterior of b. Material entities with no proper material parts would satisfy these conditions trivially. Candidate examples of types of causal unity for material entities of more complex sorts are as follows (this is not intended to be an exhaustive list):CU1: Causal unity via physical coveringHere the parts in the interior of the unified entity are combined together causally through a common membrane or other physical covering\\. The latter points outwards toward and may serve a protective function in relation to what lies on the exterior of the entity [13, 47",
        "BFO 2 Reference: ‘objects’ are sometimes referred to as ‘grains’ [74"
      ]
    },
    {
      "id": "OEO_00000062",
      "name": "associated gas",
      "description": [
        "Associated gas is a natural gas that is a byproduct from crude oil exploitation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000292",
      "name": "natural gas",
      "description": [
        "Natural gas is a portion of matter which comprises gases occurring in underground deposits, whether liquefied or gaseous, consisting mainly of methane.\n\nIt includes both ‘non-associated’ gas originating from fields producing hydrocarbons only in gaseous form, and ‘associated’ gas produced in association with crude oil as well as methane recovered from coal mines (colliery gas) or from coal seams (coal seam gas).\n\nIt does not include gases created by anaerobic digestion of biomass (e.g. municipal or sewage gas) nor gasworks gas."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000063",
      "name": "assumption",
      "description": [
        "An assumption is an information content entity about a property of a system or process. It determines a part of a scenario content."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_0000030",
      "name": "information content entity",
      "description": [
        "A generically dependent continuant that is about some thing."
      ],
      "editor_note": [
        "2014-03-10: The use of \"thing\" is intended to be general enough to include universals and configurations (see https://groups.google.com/d/msg/information-ontology/GBxvYZCk1oc/-L6B5fSBBTQJ).",
        "information_content_entity 'is_encoded_in' some digital_entity in obi before split (040907). information_content_entity 'is_encoded_in' some physical_document in obi before split (040907).\n\nPrevious. An information content entity is a non-realizable information entity that 'is encoded in' some digital or physical entity."
      ]
    },
    {
      "id": "OEO_00000064",
      "name": "author",
      "description": [
        "An author is an agent that creates or has created written work."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000066",
      "name": "aviation gasoline",
      "description": [
        "Aviation gasoline is gasoline used as motor spirit and prepared especially for aviation piston engines, with an octane number suited to the engine, a freezing point of -60 °C and a distillation range usually within the limits of 30 °C and 180 °C."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000183",
      "name": "gasoline",
      "description": [
        "Gasoline (American English) or petrol (British English) is an oil and petroleum product in the form of a transparent petroleum-derived liquid that is used primarily as a fuel in spark-ignited internal combustion engines. It consists mostly of organic compounds obtained by the fractional distillation of petroleum, enhanced with a variety of additives.",
        "https://en.wikipedia.org/w/index.php?title=Gasoline&oldid=867948640"
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000068",
      "name": "battery",
      "description": [
        "A battery is a device using different chemical or physical reactions to store energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000159",
      "name": "energy storage object",
      "description": [
        "An energy storage object is an artificial object that has the function energy storage."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000070",
      "name": "battery storage",
      "description": [
        "A battery storage is a energy storage that uses batteries to store energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000071",
      "name": "biodiesel",
      "description": [
        "Biodiesel is a portion of matter that includes bio-diesel (a methyl-ester produced from vegetable or animal oil, of diesel quality), biodimethylether (dimethylether produced from biomass), Fischer-Tropsch (Fischer-Tropsch produced from biomass), cold extracted bio-oil (oil produced from oil seed through mechanical processing only) and all other liquid biofuels which are added to, blended with or used straight as transport diesel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000072",
      "name": "biofuel",
      "description": [
        "A biofuel is a fuel that is produced through contemporary biological processes, such as agriculture and anaerobic digestion, rather than a fuel produced by geological processes such as those involved in the formation of fossil fuels, such as coal and petroleum, from prehistoric biological matter.\n\nBiofuels can be derived directly from plants (i.e. energy crops), or indirectly from agricultural, commercial, domestic, and/or industrial wastes.[1] Renewable biofuels generally involve contemporary carbon fixation, such as those that occur in plants or microalgae through the process of photosynthesis. Other renewable biofuels are made through the use or conversion of biomass (referring to recently living organisms, most often referring to plants or plant-derived materials). This biomass can be converted to convenient energy-containing substances in three different ways: thermal conversion, chemical conversion, and biochemical conversion. This biomass conversion can result in fuel in solid, liquid, or gas form. This new biomass can also be used directly for biofuels."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000173",
      "name": "fuel",
      "description": [
        "A fuel is a portion of matter that has the disposition to be an energy carrier and which has a fuel role that is realised in processes that release the carried energy by transforming the portion of matter into a different kind of portion of matter in a way that releases heat or does work."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000074",
      "name": "biogas",
      "description": [
        "A biogas is a biofuel which has a gaseous state and is composed principally of methane and carbon dioxide produced by anaerobic digestion of biomass. It is used as a biofuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000075",
      "name": "biogasoline",
      "description": [
        "Biogasoline is a portion of matter that includes bioethanol (ethanol produced from biomass and/or the biodegradable fraction of waste), biomethanol (methanol produced from biomass and/or the biodegradable fraction of waste), bioETBE (ethyl-tertio-butyl-ether produced on the basis of bioethanol; the percentage by volume of bioETBE that is calculated as biofuel is 47 %) and bioMTBE (methyl-tertio-butyl-ether produced on the basis of biomethanol: the percentage by volume of bioMTBE that is calculated as biofuel is 36 %)"
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000077",
      "name": "blast furnace gas",
      "description": [
        "Blast furnace gas is manufactured coal based gas produced during the combustion of coke in blast furnaces in the iron and steel industry. It is recovered and used as a fuel partly within the plant and partly in other steel industry processes or in power stations equipped to burn it. The quantity of fuel should be reported on a gross calorific value basis."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000263",
      "name": "manufactured coal based gas",
      "description": [
        "A manufactured coal based gas is a portion of matter that is gaseous and manufactured from coal. It is used as fossil fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000078",
      "name": "boolean variable",
      "description": [
        "A boolean variable is a variable that can only be true or false."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000435",
      "name": "variable",
      "description": [
        "A variable is an information content entity that represents a changeable value, vector, matrix or function within a mathematical expression."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000084",
      "name": "charcoal",
      "description": [
        "Charcoal is a portion of matter consisting of the solid residue of the destructive distillation and pyrolysis of wood and other vegetal material.It is used as a fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000085",
      "name": "citation reference",
      "description": [
        "A citation reference is a reference stating where a citation was taken from."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000353",
      "name": "reference",
      "description": [
        "A reference is an information content entity naming a relevant document, position in a document or address."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000087",
      "name": "client",
      "description": [
        "A client is an agent that receives a product or service."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000088",
      "name": "coal",
      "description": [
        "Coal is a portion of matter consisting of combustible black or brownish-black sedimentary rock, formed as rock strata called coal seams. Coal is mostly carbon with variable amounts of other elements; chiefly hydrogen, sulphur, oxygen, and nitrogen.coal is formed if dead plant matter decays into peat and over millions of years the heat and pressure of deep burial converts the peat into coal."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000089",
      "name": "coal powerplant",
      "description": [
        "A coal powerplant is a powerplant that has coal power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000090",
      "name": "code documentation",
      "description": [
        "A code documentation is a documentation explaining and annotating software code."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000380",
      "name": "software documentation",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00000091",
      "name": "code source",
      "description": [
        "A code source is a data descriptor describing the origin of some code."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000119",
      "name": "data descriptor",
      "description": [
        "A data descriptor is an information content entity that contains additional information about some data."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000093",
      "name": "coke oven gas",
      "description": [
        "Coke oven gas is manufactured coal based gas obtained as a by-product of the manufacture of coke oven coke for the production of iron and steel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000094",
      "name": "coking coal",
      "description": [
        "Coking coal is hard coal that is bituminous with a quality that allows the production of a coke suitable to support a blast furnace charge. Its gross calorific value is greater than 23 865 kJ/kg (5 700 kcal/kg) on an ash-free but moist basis."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000096",
      "name": "colliery gas",
      "description": [
        "Colliery gas is natural gas found in coal mines (British English: colliery). The main component is methane. Synonyms are firedamp, mine gas. It is used as a fossil fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000097",
      "name": "combustible energy carrier disposition",
      "description": [
        "A combustible energy carrier is an energy carrier that releases energy from a material entity in form of heat or work, by chemical reaction with other substances."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000099",
      "name": "combustion fuel",
      "description": [
        "A combustible fuel is a fuel that realises its fuel role in processes that release energy in the form of heat or work by chemical reaction with other substances."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000102",
      "name": "compressed air",
      "description": [
        "Compressed air is air that has been compressed to store energy. To discharge energy, the air is expanded."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000104",
      "name": "constraint",
      "description": [
        "A constraint is a condition that has to be fullfilled within a calculation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000105",
      "name": "consumer",
      "description": [
        "A consumer is a user of a commercial product or service."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000431",
      "name": "user",
      "description": [
        "A user is an agent that employs an aid, tool or information system to achieve a goal/benefit."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000107",
      "name": "contact person",
      "description": [
        "A contact person is an agent that can be contacted for help or information about a specific service or good."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000115",
      "name": "crude oil",
      "description": [
        "Crude oil is an oil and petroleum product of natural origin comprising a mixture of hydrocarbons and associated impurities, such as sulphur. It exists in the liquid phase under normal surface temperature and pressure and its physical characteristics (density, viscosity, etc.) are highly variable. This category includes field or lease condensate recovered from associated and non-associated gas where it is commingled with the commercial crude oil stream."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000309",
      "name": "oil and petroleum products",
      "description": [
        "Petroleum (/pəˈtroʊliəm/) is a naturally occurring, yellowish-black liquid found in geological formations beneath the Earth's surface. It is commonly refined into various types of fuels. Components of petroleum are separated using a technique called fractional distillation, i.e. separation of a liquid mixture into fractions differing in boiling point by means of distillation, typically using a fractionating column.\n\nIt consists of hydrocarbons of various molecular weights and other organic compounds. The name petroleum covers both naturally occurring unprocessed crude oil and petroleum products that are made up of refined crude oil. A fossil fuel, petroleum is formed when large quantities of dead organisms, mostly zooplankton and algae, are buried underneath sedimentary rock and subjected to both intense heat and pressure."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000117",
      "name": "dam",
      "description": [
        "A dam is an artificial object that stops or restricts the flow of water or underground streams."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000118",
      "name": "database",
      "description": [
        "A database is an information content entity that stores data items and data sets."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000120",
      "name": "data format",
      "description": [
        "A data format is a data descriptor that describes in which format the data is encoded."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000122",
      "name": "data postprocessing",
      "description": [
        "Data postprocessing is data processing that transforms the output of a model calculation into a form that is suitable for presentation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000124",
      "name": "data processing",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00000123",
      "name": "data preprocessing",
      "description": [
        "Data preprocessing is data processing that transforms the input into a form that is useable for a model calculation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000419",
      "name": "transformation",
      "description": [
        "A transformation is a process that transforms one or more inputs into at least one output."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000125",
      "name": "data processing software",
      "description": [
        "data processing software is software used in the context of data processing."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_0000010",
      "name": "software",
      "description": [
        "Software is a plan specification composed of a series of instructions that can be \ninterpreted by or directly executed by a processing unit."
      ],
      "editor_note": [
        "see sourceforge tracker discussion at http://sourceforge.net/tracker/index.php?func=detail&aid=1958818&group_id=177891&atid=886178"
      ]
    },
    {
      "id": "OEO_00000126",
      "name": "HVDC-line",
      "description": [
        "An HVDC-line is a powerline for transferring high voltage direct current."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000128",
      "name": "energy demand sector",
      "description": [
        "An energy demand sector is a sector that covers energy consumers."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000367",
      "name": "sector",
      "description": [
        "A sector is generically dependent continuant that is a subdivision of a system."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000129",
      "name": "grid transferred thermal energy",
      "description": [
        "Grid transferred thermal energy is thermal energy that is transferred via the grid-bound heating process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000131",
      "name": "diesel fuel",
      "description": [
        "Diesel fuel is gas diesel oil used on-road for diesel compression ignition (cars, trucks, etc.), usually of low sulphur content."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000181",
      "name": "gas diesel oil",
      "description": [
        "Gas/diesel oil is an oil and petroleum product that is primarily a medium distillate distilling between 180 °C and 380 °C. Includes blending components. Several grades are available depending on uses."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000132",
      "name": "district heating",
      "description": [
        "District heating is a grid-bound heating transfer to residential or commercial buildings."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020073",
      "name": "grid-bound heating",
      "description": [
        "Grid-bound heating is a heat transfer over a distance via a heating grid, using steam or (hot) water."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000133",
      "name": "DOI",
      "description": [
        "A DOI (digital object identifier) is a persistent identifier or handle used to uniquely identify objects, standardized by the International Organization for Standardization (ISO).\nsource: https://en.wikipedia.org/wiki/Digital_object_identifier"
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000139",
      "name": "electrical energy",
      "description": [
        "Electrical energy is a form of energy derived from the potential or kinetic energy of charged particles."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000143",
      "name": "electricity grid",
      "description": [
        "An electricity grid is a supply grid that distributes electrical energy / electricity."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000200",
      "name": "supply grid",
      "description": [
        "A supply grid is an object aggregate of systematically connected artificial objects that can work as a supply system."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000144",
      "name": "electricity grid component",
      "description": [
        "An electricity grid component is a grid component that is part of an electricity grid."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020006",
      "name": "grid component",
      "description": [
        "A grid component is an artificial object that is a discrete part of a supply grid serving a specific purpose."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000145",
      "name": "electricity sector",
      "description": [
        "An electricity sector is a transformation sector that covers electricity generation and transport of electrical energy to consumers of electrical energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000158",
      "name": "energy transformation sector",
      "description": [
        "An energy transformation sector is a sector that covers energy production, energy transformation from primary to secondary energy and transport of energy to the demand sector."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000146",
      "name": "electric vehicle",
      "description": [
        "An electric vehicle (abbreviated as EV) is a vehicle that uses one or more electric motors for propulsion."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010023",
      "name": "vehicle",
      "description": [
        "A vehicle is an artifical object that is used for transporting people or goods."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000147",
      "name": "emission",
      "description": [
        "emission is a process releasing byproducts from human activity (e.g. production, distribution or consumption) into the environment."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000148",
      "name": "emission factor",
      "description": [
        "An emission factor is a process attribute that quantifies the emissions or removals of a gas per unit activity."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030019",
      "name": "process attribute",
      "description": [
        "A process attribute is a dependent occurrent that existentially depends on a process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000149",
      "name": "empirical dataset",
      "description": [
        "An empirical dataset is a dataset that is optained from observations in the real world."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_0000100",
      "name": "data set",
      "description": [
        "A data item that is an aggregate of other data items of the same type that have something in common. Averages and distributions can be determined for data sets."
      ],
      "editor_note": [
        "2009/10/23 Alan Ruttenberg. The intention is that this term represent collections of like data. So this isn't for, e.g. the whole contents of a cel file, which includes parameters, metadata etc. This is more like java arrays of a certain rather specific type",
        "2014-05-05: Data sets are aggregates and thus must include two or more data items. We have chosen not to add logical axioms to make this restriction."
      ]
    },
    {
      "id": "BFO_0000019",
      "name": "quality",
      "description": [],
      "editor_note": []
    },
    {
      "id": "BFO_0000016",
      "name": "disposition",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: Dispositions exist along a strength continuum. Weaker forms of disposition are realized in only a fraction of triggering cases. These forms occur in a significant number of cases of a similar type."
      ]
    },
    {
      "id": "OEO_00000161",
      "name": "external optimiser",
      "description": [
        "An external optimiser is a software external to a model that computes an optimisation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000162",
      "name": "factsheet",
      "description": [
        "A factsheet is a document that collects information about a specific topic in a structured way."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_0000310",
      "name": "document",
      "description": [
        "A collection of information content entities intended to be understood together as a whole"
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000165",
      "name": "field photovoltaic powerplant",
      "description": [
        "A field photovoltaic powerplant (also: solar farm, solar park) is a photovoltaic powerplant that is installed out in the open on the ground."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000324",
      "name": "photovoltaic powerplant",
      "description": [
        "A photovoltaic powerplant is a solar powerplant that has PV panels as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000169",
      "name": "flow battery",
      "description": [
        "A flow battery, or redox flow battery (after reduction–oxidation), is a type of electrochemical cell where chemical energy is provided by two chemical components dissolved in liquids contained within the system and separated by a membrane. Ion exchange (accompanied by flow of electric current) occurs through the membrane while both liquids circulate in their own respective space."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000172",
      "name": "framework factsheet",
      "description": [
        "A framework factsheet is a factsheet that contains information about a software framework."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000174",
      "name": "fueled powerplant",
      "description": [
        "A fueled powerplant is a powerplant that has fueled power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000175",
      "name": "fueled power unit",
      "description": [
        "A fueled power unit is a power generating unit that uses fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000184",
      "name": "gas powerplant",
      "description": [
        "A gas powerplant is a powerplant that has gas fired power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000185",
      "name": "gas turbine",
      "description": [
        "A gas turbine is a turbine that converts chemical energy into rotational energy using a continous internal combustion process. Hence it is also called combustion turbine."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000425",
      "name": "turbine",
      "description": [
        "A turbine is an energy converting device that converts energy from a moving fluid flow into rotational energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000186",
      "name": "gasworks gas",
      "description": [
        "Gasworks gas is manufactured coal based gas that covers all types of gases produced in public utility or private plants, whose main purpose is manufacture, transport and distribution of gas. It includes gas produced by carbonisation (including gas produced by coke ovens and transferred to gasworks gas), by total gasification with or without enrichment with oil products (LPG, residual fuel oil, etc.), and by reforming and simple mixing of gases and/or air, reported under the rows ‘from other sources’. Under the transformation sector identify amounts of gasworks gas transferred to blended natural gas which will be distributed and consumed through the natural gas grid.\n\nThe production of other coal gases (i.e. coke oven gas, blast furnace gas and oxygen steel furnace gas) should be reported in the columns concerning such gases, and not as production of gasworks gas. The coal gases transferred to gasworks plants should then be reported (in their own column) in the transformation sector in the gasworks plants row. The total amount of gasworks gas resulting from transfers of other coal gases should appear in the production line for gasworks gas."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000189",
      "name": "geographic coordinate",
      "description": [],
      "editor_note": []
    },
    {
      "id": "BFO_0000141",
      "name": "immaterial entity",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: Immaterial entities are divided into two subgroups:boundaries and sites, which bound, or are demarcated in relation, to material entities, and which can thus change location, shape and size and as their material hosts move or change shape or size (for example: your nasal passage; the hold of a ship; the boundary of Wales (which moves with the rotation of the Earth) [38, 7, 10"
      ]
    },
    {
      "id": "OEO_00000191",
      "name": "geothermal energy",
      "description": [
        "Geothermal energy is thermal energy that is released from within the earth's crust."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000192",
      "name": "geothermal powerplant",
      "description": [
        "A geothermal powerplant is a powerplant that has geothermal power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000198",
      "name": "greenhouse effect disposition",
      "description": [
        "The greenhouse effect disposition is the disposition of a gas to contribute to the greenhouse effect, when it is emitted into the atmosphere."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000199",
      "name": "greenhouse gas emission",
      "description": [
        "A greenhouse gas emission is an emission that releases a greenhouse gas."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000027",
      "name": "object aggregate",
      "description": [],
      "editor_note": [
        "An entity a is an object aggregate if and only if there is a mutually exhaustive and pairwise disjoint partition of a into objects ",
        "BFO 2 Reference: object aggregates may gain and lose parts while remaining numerically identical (one and the same individual) over time. This holds both for aggregates whose membership is determined naturally (the aggregate of cells in your body) and aggregates determined by fiat (a baseball team, a congressional committee)."
      ]
    },
    {
      "id": "OEO_00000202",
      "name": "GUI",
      "description": [
        "A GUI (Graphical user interface)  is a software interface allowing users to communicate with a software application through a graphical window."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000205",
      "name": "hard coal powerplant",
      "description": [
        "A hard coal powerplant is a coal powerplant that has hard coal power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000206",
      "name": "hardware",
      "description": [
        "Hardware is an artificial object that is part of an electronic system."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000210",
      "name": "heater",
      "description": [
        "A heater is an energy converting device that converts other forms of energy into useful heat."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000211",
      "name": "heating oil",
      "description": [
        "Heating oil is gas diesel oil for industrial and commercial uses, marine diesel and diesel used in rail traffic, other gas oil, including heavy gas oils which distil between 380 °C and 540 °C and which are used as petrochemical feedstocks."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000213",
      "name": "heating and cooling sector",
      "description": [
        "A heating and cooling sector is a sector that covers heating and cooling activities."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000214",
      "name": "household sector",
      "description": [
        "A household sector is a sector that covers households."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000218",
      "name": "hydro energy",
      "description": [
        "Hydro energy is kinetic energy of moving liquid water which can result directly from its potential energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230020",
      "name": "kinetic energy",
      "description": [
        "Kinetic energy is the energy that a material entity possesses due to its motion. It is defined as the work needed to accelerate a body of a given mass from rest to a stated velocity."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000219",
      "name": "hydrofluorocarbon",
      "description": [
        "Hydrofluorocarbons (HFCs) are portions of matter consisting of organic compounds that contain fluorine and hydrogen atoms, and are the most common type of organofluorine compounds. They are frequently used in air conditioning and as refrigerants in place of the older chlorofluorocarbons such as R-12 and hydrochlorofluorocarbons such as R-21."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000220",
      "name": "hydrogen",
      "description": [
        "Hydrogen is a portion of matter with the chemical formular H2. It has a gaseous normal state of matter. As it can be oxidised it can be used as a fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000221",
      "name": "hydrogen powerplant",
      "description": [
        "A hydrogen powerplant is a powerplant that has hydrogen power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000222",
      "name": "hydrogen turbine",
      "description": [
        "A hydrogen turbine is a natural gas turbine fueled with hydrogen."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140135",
      "name": "natural gas turbine",
      "description": [
        "A natural gas turbine is a gas turbine fueled with natural gas."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000226",
      "name": "industrial waste fuel",
      "description": [
        "Industrial waste fuel is waste fuel of industrial non-renewable origin (solids or liquids) combusted directly for the production of electricity and/or heat. The quantity of fuel used should be reported on a net calorific value basis. Renewable industrial waste should be reported in the solid biomass, biogas and/or liquid biofuels categories."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000439",
      "name": "waste fuel",
      "description": [
        "A waste fuel is a fuel in which the material entity is waste."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000227",
      "name": "industry sector",
      "description": [
        "An industry sector is a sector that covers industrial activities with other main purposes of energy transformation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000228",
      "name": "installation guide",
      "description": [
        "An installation guide is a documentation intended to help users install a Software."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000238",
      "name": "institution",
      "description": [
        "An institution is an organisation that serves a social purpose."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030022",
      "name": "organisation",
      "description": [
        "An organisation is an immaterial entity that has the organisation role and there exists some sort of legal framework that recognises the entity and its continued existence."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000240",
      "name": "internal combustion vehicle",
      "description": [
        "An internal combustion vehicle is a vehicle powered by an internal combustion engine."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000245",
      "name": "jet fuel",
      "description": [
        "Jet fuel is kerosene used for aviation turbine power units. It has the same distillation characteristics between 150 °C and 300 °C (generally not above 250 °C) and flash point as kerosene. In addition, it has particular specifications (such as freezing point) which are established by the International air Transport Association (IATA)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000246",
      "name": "kerosene",
      "description": [
        "Kerosene, also known as paraffin, lamp oil, and coal oil (an obsolete term), is an oil and petroleum product consisting of combustible hydrocarbon liquid which is derived from petroleum. It is widely used as a fuel in industry as well as households. It is sometimes spelled kerosine in scientific and industrial usage.\n[...]\n\nKerosene is widely used to power jet engines of aircraft (jet fuel) and some rocket engines and is also commonly used as a cooking and lighting fuel and for fire toys such as poi. In parts of Asia, kerosene is sometimes used as fuel for small outboard motors or even motorcycles."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000248",
      "name": "lithium-ion battery",
      "description": [
        "A lithium-ion battery or Li-ion battery (abbreviated as LIB) is a type of rechargeable battery [...] In the batteries lithium ions move from the negative electrode to the positive electrode during discharge and back when charging. Li-ion batteries use an intercalated lithium compound as one electrode material, compared to the metallic lithium used in a non-rechargeable lithium battery. "
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000251",
      "name": "lignite",
      "description": [
        "Lignite is coal that is non-agglomerating with a gross calorific value less than 17 435 kJ/kg (4 165 kcal/kg) and greater than 31 % volatile matter on a dry mineral matter free basis.\t\n\nOil shale and tar sands produced and combusted directly should be reported in this category. Oil shale and tar sands used as inputs for other transformation processes should also be reported in this category.\t\n\nThis includes the portion of the oil shale or tar sands consumed in the transformation process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000252",
      "name": "lignite powerplant",
      "description": [
        "A lignite powerplant is a coal powerplant that has lignite power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000255",
      "name": "grid component link",
      "description": [
        "A grid component link is a grid component that serves as a connection between two other grid components."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000257",
      "name": "liquid air",
      "description": [
        "Liquid air is air that has been compressed and cooled to store energy until it condenses as a liquid. To discharge energy, the air is expanded."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000259",
      "name": "liquid-metal battery",
      "description": [
        "Rechargeable liquid-metal batteries are used for electric vehicles and potentially also for grid energy storage, to balance out intermittent renewable power sources such as solar panels and wind turbines."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000283",
      "name": "molten state battery",
      "description": [
        "Molten-state batteries consist of two molten metal alloys separated by an electrolyte.",
        "Wastes produced by households, hospitals and the tertiary sector incinerated at specific installations, on a net calorific value basis."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000264",
      "name": "market model",
      "description": [
        "A market model is a model is about the EnergyMarket."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000274",
      "name": "model",
      "description": [
        "A model is a generically dependent continuant that is used for computing an idealised reproduction of a system and its behaviours."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000269",
      "name": "methanation gas storage",
      "description": [
        "A methanation gas storage is a energy storage that uses carbon dioxide and hydrogen from electrolysis to produce methan and store this. The methan can then be used to produce electricity or heat in a gas generator."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000031",
      "name": "generically dependent continuant",
      "description": [
        "b is a generically dependent continuant = Def. b is a continuant that g-depends_on one or more other entities. (axiom label in BFO2 Reference: [074-001])"
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000275",
      "name": "model calculation",
      "description": [
        "A model calculation is a process of solving mathematical equations of a model."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000276",
      "name": "model component",
      "description": [
        "A model component is a generically dependent continuant that is part of a model."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000277",
      "name": "model factsheet",
      "description": [
        "A model factsheet is a model descriptor that contains a brief description of all relevant model information."
      ],
      "editor_note": [
        "Since a model facsheet is a model descriptor as well as a factsheet, this class is implemented as equivalent class to OEO_00000277."
      ]
    },
    {
      "id": "OEO_00000279",
      "name": "modelling software",
      "description": [
        "A modelling software is a software used to create and maintain a (mathematical) model."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000281",
      "name": "modus",
      "description": [
        "A modus is an information content entity describing the state of activity something has, e.g. active, inactive or passive."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000282",
      "name": "molten-salt battery",
      "description": [
        "Molten-salt batteries are a class of battery that uses molten salts as an electrolyte and offers both a high energy density and a high power density."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000286",
      "name": "motor gasoline",
      "description": [
        "Motor gasoline is gasoline consisting of a mixture of light hydrocarbons distilling between 35 oC and 215 oC. It is used as a fuel for land based spark ignition engines. Motor gasoline may include additives, oxygenates and octane enhancers, including lead compounds such as TEL and TML.\n\nIncludes motor gasoline blending components (excluding additives/oxygenates), e.g. alkylates, isomerate, reformate, cracked gasoline destined for use as finished motor gasoline."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000290",
      "name": "municipal waste fuel",
      "description": [
        "Municipal waste fuel is waste fuel of waste produced by households, hospitals and the tertiary sector incinerated at specific installations, on a net calorific value basis."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000293",
      "name": "negative emission",
      "description": [
        "Negative emission is the process of absorbing a substance, usually a pollutant that was emitted before."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000296",
      "name": "grid node",
      "description": [
        "A grid node is a grid component of a supply grid where two or more links meet."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000297",
      "name": "non associated gas",
      "description": [
        "Non associated gas is natural gas originating from fields producing hydrocarbons only in gaseous form."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000298",
      "name": "non-methane volatile organic compound",
      "description": [
        "A non-methane volatile organic compound (NMVOC) is a volatile organic compound other than methane."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000437",
      "name": "volatile organic compound",
      "description": [
        "A volatile organic compound (VOC) is a portion of matter consisting of organic compounds that is capable of producing photochemical oxidants by reactions with nitrogen oxides in the presence of sunlight. Hence it can act as an air pollutant."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000299",
      "name": "non renewable municipal waste fuel",
      "description": [
        "Non renewable municipal waste fuel is municipal waste fuel of non-biological origin."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000300",
      "name": "nuclear binding energy",
      "description": [
        "Nuclear binding energy is the energy that is required to disassemble the nucleus of an atom into its component parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000302",
      "name": "nuclear fuel",
      "description": [
        "A nuclear fuel is a fuel that realises its fuel role in processes that release energy in the form of heat or work by undergoing nuclear fission."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000303",
      "name": "nuclear powerplant",
      "description": [
        "A nuclear powerplant is a powerplant that has nuclear power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000304",
      "name": "objective function",
      "description": [
        "An objective function is an information content entity stating the function that should be maximised or minimised to solve a problem."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000308",
      "name": "offshore wind farm",
      "description": [
        "An offshore wind farm is a wind farm that is build in a body of water, usually the ocean."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000447",
      "name": "wind farm",
      "description": [
        "A wind farm is a powerplant that has wind energy converting units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000310",
      "name": "oil powerplant",
      "description": [
        "A oil powerplant is a powerplant that has oil power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000311",
      "name": "onshore wind farm",
      "description": [
        "An onshore wind farm is a wind farm that is build on land."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000312",
      "name": "open source",
      "description": [
        "open source is a software descriptor labelling software whose source code is available online for free and can be modified or redistributed."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000378",
      "name": "software descriptor",
      "description": [
        "A software descriptor is an information content entity that contains additional information about the software."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000313",
      "name": "optimisation",
      "description": [
        "An optimisation is a model calculation with the goal to find a best choice or result for at least one variable or function in the model."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000314",
      "name": "optimisation model",
      "description": [
        "An optimisation model is a model that optimises a target function."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000315",
      "name": "organisation role",
      "description": [
        "An organisation role is a role of an aggregate of people that has a collective goal and a set of organisation rules."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000316",
      "name": "origin",
      "description": [
        "The origin is a quality that indicates where something comes from (its source)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000318",
      "name": "particulate matter",
      "description": [
        "Particulate matter is a portion of matter consisting of small particles. It can act as an air pollutant."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000320",
      "name": "peat",
      "description": [
        "Peat is a portion of matter consisting of combustible soft, porous or compressed, sedimentary deposit of plant origin with high water content (up to 90 % in the raw state), easily cut, of light to dark brown colour. Peat used for non-energy purposes is not included.\n\nThis definition is without prejudice to the definition of renewable energy sources in Directive 2001/77/EC and to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000322",
      "name": "perfluorocarbon",
      "description": [
        "Perfluorocarbons (PFCs) are portions of matter consisting of organic compounds that contain fluorine atoms but no hydrogen atoms."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000323",
      "name": "person",
      "description": [
        "A person is a human being."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000386",
      "name": "solar power plant",
      "description": [
        "A solar powerplant is a powerplant that has solar power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000327",
      "name": "plotting",
      "description": [
        "Plotting is data processing where data is visualised in form of a diagram."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000328",
      "name": "political assumption",
      "description": [
        "A political assumption is an assumption about political measures taken."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000329",
      "name": "political party",
      "description": [
        "A political party is a organisation of a group of people with common views or goals that wants to have influence in politics."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000333",
      "name": "power",
      "description": [
        "Power is the process attribute that is the amount of energy transformed or transferred per time unit."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000335",
      "name": "power-to-gas system",
      "description": [
        "a power-to-gas (often abbreviated P2G) system is an energy storage object that converts electrical power to a gas fuel. When using surplus power from wind generation, the concept is sometimes called windgas. There are currently three methods in use; all use electricity to split water into hydrogen and oxygen by means of electrolysis."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000339",
      "name": "program parameter",
      "description": [
        "A program parameter is a variable that influences the output of  a calculation in the program but has no meaning outside of the program."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000340",
      "name": "project",
      "description": [
        "A project is a process to achieve a specified goal that is unique in the sum of its conditions like its goal, time and cost budget and its organisation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000341",
      "name": "prosumer",
      "description": [
        "A prosumer is an agent who is producer and consumer at the same time."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000343",
      "name": "pumped storage",
      "description": [
        "A pumped storage (pumped-storage hdyroelectricity) is an energy storage that uses water from a higher reservoir to generate energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000345",
      "name": "pumped water",
      "description": [
        "Pumped water is liquid water which was pumped into an upper reservoir and thus contains potential energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00110000",
      "name": "liquid water",
      "description": [
        "Liquid water is water that has a liquid state of matter."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000348",
      "name": "PV panel",
      "description": [
        "A PV panel (photovoltaic panel) is a solar power unit absorbing sunlight as a source of energy to generate electricity."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000350",
      "name": "quantity value",
      "description": [
        "A quantity value is an information content entity defined by a numeral together with a unit of measurement to quantify an entity."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000356",
      "name": "renewable municipal waste fuel",
      "description": [
        "Renewable municipal waste fuel is municipal waste fuel of biological origin."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000361",
      "name": "rooftop photovoltaic powerplant",
      "description": [
        "A rooftop photovoltaic powerplant is a photovoltaic powerplant that is installed on top of the roof of a building."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000364",
      "name": "scenario",
      "description": [
        "A scenario is an information content entity that contains statements about a possible future development based on a coherent and internally consistent set of assumptions and their motivation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000365",
      "name": "scenario factsheet",
      "description": [
        "A scenario factsheet is a factsheet that contains information about a scenario."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000368",
      "name": "sector division",
      "description": [
        "A sector division is a specific way to subdivide a system."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000370",
      "name": "simulation",
      "description": [
        "A simulation is a model calculation that simulates a process or system behaviour from the real world."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000371",
      "name": "simulation model",
      "description": [
        "A simulation model is a model that simulates the behaviour of a system without a target function."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000372",
      "name": "single node model",
      "description": [
        "A single node model is a model where a region is represented as a single node."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000374",
      "name": "SMES",
      "description": [
        "Superconducting magnetic energy storage (SMES) systems store energy in the magnetic field created by the flow of direct current in a superconducting coil which has been cryogenically cooled to a temperature below its superconducting critical temperature.\n          A typical smes system includes three parts: superconducting coil, power conditioning system and cryogenically cooled refrigerator. Once the superconducting coil is charged, the current will not decay and the magnetic energy can be stored indefinitely."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000376",
      "name": "sodium-ion battery",
      "description": [
        "Sodium-ion batteries (SIB) are a type of rechargeable metal-ion battery that uses sodium ions as charge carriers."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000377",
      "name": "sodium-sulphur battery",
      "description": [
        "A sodium–sulphur battery is a type of molten-salt battery constructed from liquid sodium (Na) and sulphur (S).This type of battery has a high energy density, high efficiency of charge/discharge and long cycle life, and is fabricated from inexpensive materials. The operating temperatures of 300 to 350 °C and the highly corrosive nature of the sodium polysulphides, primarily make them suitable for stationary energy storage applications. The cell becomes more economical with increasing size."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000379",
      "name": "software developer",
      "description": [
        "A software developer is an agent that creates computer software."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000382",
      "name": "software framework",
      "description": [
        "A software framework is a Software that is generic and can be adapted to a specific application."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000384",
      "name": "solar energy",
      "description": [
        "Solar energy is radiative energy of the sun."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020040",
      "name": "radiative energy",
      "description": [
        "Radiative energy is energy that has been transmitted by a radiation process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000387",
      "name": "solar thermal collector",
      "description": [
        "A solar thermal collector is a heater that absorbs solar radiation to convert it into heat."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000388",
      "name": "solar thermal energy",
      "description": [
        "Solar thermal energy is thermal energy that is the physical output of a solar thermal energy transformation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000389",
      "name": "solar thermal powerplant",
      "description": [
        "A solar thermal powerplant is a solar powerplant that has solar thermal power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000391",
      "name": "solid fossil fuel",
      "description": [
        "Solid fossil fuels are fuels of fossil origin and that have a solid state of matter under normal conditions."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000392",
      "name": "solver",
      "description": [
        "A solver is a software that solves a mathematical problem."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000395",
      "name": "state of matter",
      "description": [
        "In physics, a state of matter is one of the distinct forms in which matter can exist. Four states of matter are observable in everyday life: solid, liquid, gas, and plasma. Many intermediate states are known to exist, such as liquid crystal, and some states only exist under extreme conditions"
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000396",
      "name": "steam turbine",
      "description": [
        "A steam turbine is a turbine that converts heat from pressurised steam into rotational energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000399",
      "name": "storage unit",
      "description": [
        "A storage unit is a grid component that stores energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000401",
      "name": "sub bituminous coal",
      "description": [
        "Sub bituminous coal is coal that is non-agglomerating with a gross calorific value between 17 435 kJ/kg (4 165 kcal/kg) and 23 865 kJ/kg (5 700 kcal/kg) containing more than 31 % volatile matter on a dry mineral matter free basis."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000403",
      "name": "synthetic dataset",
      "description": [
        "A synthetic dataset is a dataset that is obtained by artificially creating data items. It is constructed to be an estimation of a real world dataset."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000405",
      "name": "commercial sector",
      "description": [
        "A commercial sector is a sector that covers non-industrial commercial activities."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000407",
      "name": "technology",
      "description": [
        "A Technology is an information content entity that specifies how to create an artificial object."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000408",
      "name": "test dataset",
      "description": [
        "A test dataset is a data set used for testing."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000420",
      "name": "transformer",
      "description": [
        "A transformer is an electricity grid component that passively transfers electrical energy from one electrical circuit to another."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000422",
      "name": "transport sector",
      "description": [
        "A transport sector is a sector that covers transport of people and/or goods."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000423",
      "name": "electricity transshipment model",
      "description": [
        "An electricity transshipment model is a model that applies the transshipment problem to the electricity grid."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000429",
      "name": "underground hydrogen storage",
      "description": [
        "An underground hydrogen storage is an energy storage object that stores hydrogen underground. Examples are underground caverns, salt domes and depleted oil/gas fields."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000432",
      "name": "user documentation",
      "description": [
        "A user documentation is a documentation intended to assist users in using the software."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000440",
      "name": "waste powerplant",
      "description": [
        "A waste powerplant is a powerplant that has waste power units as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000441",
      "name": "water",
      "description": [
        "Water is a portion of matter with the chemical formula H2O. It has a liquid normal state of matter."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000442",
      "name": "water turbine",
      "description": [
        "A water turbine is a turbine converting potential energy and kinetic energy of water into rotational energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000446",
      "name": "wind energy",
      "description": [
        "Wind energy is the kinetic energy of moving air."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000448",
      "name": "wind rotor",
      "description": [
        "A wind rotor (or wind turbine) is a turbine that converts the wind's kinetic energy into rotational energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000449",
      "name": "wood and other",
      "description": [
        "Wood and other is solid biomass of purpose-grown energy crops (poplar, willow etc.), a multitude of woody materials generated by an industrial process (wood/paper industry in particular) or provided directly by forestry and agriculture (firewood, wood chips, wood pellets, bark, sawdust, shavings, chips, black liquor etc.) as well as wastes such as straw, rice husks, nut shells, poultry litter, crushed grape dregs etc. Combustion is the preferred technology for these solid wastes. The quantity of fuel used should be reported on a net calorific value basis."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00000332",
      "name": "solid biofuel",
      "description": [
        "Solid biomass is a portion of matter consisting of organic, non-fossil material of biological origin which may be used as fuel for heat production or electricity generation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010000",
      "name": "ammonia",
      "description": [
        "Ammonia is a portion of matter with the chemical formula NH3. It has a gaseous normal state of matter and can act as an air pollutant. Synonyms are trihydridonitrogen and nitrogen trihydride."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010001",
      "name": "carbon monoxide",
      "description": [
        "Carbon monoxide is a portion of matter with the chemical formula CO. It has a gaseous normal state of matter and can act as an air pollutant."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010002",
      "name": "nitrogen oxides",
      "description": [
        "Nitrogen oxides are a portion of matter consisting of compounds of nitrogen and oxygen. It is a collective term for numerous oxides of nitrogen with a gaseous normal state of matter. They can act as air pollutants."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010003",
      "name": "nitric oxide",
      "description": [
        "Nitric oxide is a portion of matter with the chemical formula NO. It is a gas and can act as an air pollutant. Synonyms are nitrogen oxide or nitrogen monoxide."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010004",
      "name": "nitrogen dioxide",
      "description": [
        "Nitrogen dioxide is a portion of matter with the chemical formula NO2. It is a gas and can act as an air pollutant."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010007",
      "name": "sulphur dioxide",
      "description": [
        "Sulphur dioxide is a portion of matter with the chemical formula SO2. It has a gaseous normal state of matter and can act as an air pollutant."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010009",
      "name": "PM10",
      "description": [
        "PM10 is particulate matter which passes through a size-selective inlet as defined in the reference method for the sampling and measurement of PM10, EN 12341, with a 50 % efficiency cut-off at 10 µm aerodynamic diameter."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010010",
      "name": "PM2.5",
      "description": [
        "PM2.5 is particulate matter which passes through a size-selective inlet as defined in the reference method for the sampling and measurement of PM2,5, EN 14907, with a 50 % efficiency cut-off at 2,5 µm aerodynamic diameter."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010011",
      "name": "volatility",
      "description": [
        "The volatility disposition is the disposition of a portion of matter to sublimate or evaporate from the solid or liquid form and enter the surrounding air."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010012",
      "name": "air pollutant",
      "description": [
        "An air pollutant is a portion of matter that has the disposition to participates in air pollution."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010015",
      "name": "fossil hydrogen",
      "description": [
        "Fossil hydrogen is hydrogen with fossil origin. It is usually produced from fossil fuels applying the steam reforming process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010016",
      "name": "synthetic hydrogen",
      "description": [
        "Synthetic hydrogen is hydrogen with synthetic origin. It is usually produced from water applying the water electrolysis process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010018",
      "name": "synthetic methane",
      "description": [
        "Synthetic methane is synthetic fuel produced in a power-to-gas system from water and carbon dioxide using electric energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010019",
      "name": "synthetic liquid fuel",
      "description": [
        "Synthetic liquid fuel is synthetic fuel produced in a power-to-liquid system from water and carbon dioxide using electric energy applying."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010017",
      "name": "synthetic fuel",
      "description": [
        "A synthetic fuel is a fuel produced from one or more portion(s) of matter using electric energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010020",
      "name": "power-to-liquid system",
      "description": [
        "A power-to-liquid (often abbreviated P2L or PtL) system is an energy storage object that converts electrical power to a liquid fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010021",
      "name": "water electrolyser",
      "description": [
        "A water electrolyser is an energy converting device that uses an electric current to decompose water into hydrogen and oxygen gas. Electric energy is converted into chemical energy (and waste heat)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010022",
      "name": "steam reformer",
      "description": [
        "A steam reformer is an energy converting device that produces syngas from hydrocarbons such as natural gas."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010024",
      "name": "battery electric vehicle",
      "description": [
        "A battery electric vehicle (BEV) is an electric vehicle that stores energy in an on-board battery."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010025",
      "name": "fuel cell electric vehicle",
      "description": [
        "A fuel cell electric vehicle (FCEV) is an electric vehicle that uses electrical energy from a fuel cell."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010026",
      "name": "traction battery",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00010027",
      "name": "electric motor",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00010032",
      "name": "motor",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00010028",
      "name": "traction motor",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00010029",
      "name": "internal combustion engine",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00010030",
      "name": "plug-in hybrid electric vehicle",
      "description": [
        "A plug-in hybrid electric vehicle (PHEV) is a vehicle that contains both a traction motor and an internal combustion engine and can switch between their usage for propulsion. It contains a traction battery that can be charged with electrical energy from an external supply."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010031",
      "name": "grid supplied electric vehicle",
      "description": [
        "A grid supplied electric vehicle is an electric vehicle that uses electrical energy via a conductor."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010034",
      "name": "building sector",
      "description": [
        "A building sector is a sector that covers buildings."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010035",
      "name": "agriculture, forestry and land use sector",
      "description": [
        "A agriculture, forestry and land use (AFOLU) sector is a sector that covers activities and natural processes from agriculture, forestry, land use and land use change."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010036",
      "name": "waste and wastewater sector",
      "description": [
        "A waste and wastewater sector is a sector that covers activities related the collection and treatment of waste and wastewater."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010051",
      "name": "sensitivity analysis",
      "description": [
        "A sensitivity analysis is the process of comparing different model calculations based on a variation of input parameters (exogenous data items)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010055",
      "name": "common reporting format",
      "description": [
        "The common reporting format (CRF) is a sector division used for compiling national inventory reports on greenhouse gas emissions and providing emission relevant data in so called CRF tables."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010072",
      "name": "areal power density unit",
      "description": [
        "An areal power density unit is a unit which is a measure for the power per surface area."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000000",
      "name": "unit",
      "description": [
        "A unit of measurement is a standardised quantity of a quantifiable entity."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010073",
      "name": "areal energy density unit",
      "description": [
        "An areal energy density unit is a unit which is a measure for the energy per surface area."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010074",
      "name": "areal power density",
      "description": [
        "An areal power density is a quantity value that indicates a certain power per area."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010075",
      "name": "areal energy density",
      "description": [
        "An areal energy density is a quantity value that states a certain energy amount per area."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010076",
      "name": "areal solar power density",
      "description": [
        "An areal solar power density is an areal power density that indicates the arriving solar power per area. A synonym for areal solar power density is irradiance."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010077",
      "name": "areal solar energy density",
      "description": [
        "An areal solar energy density is an areal energy density that gives the arriving solar power per area. A synonym for areal solar power density is irradiation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010078",
      "name": "global warming potential",
      "description": [
        "Global warming potential (GWP) is a quantity value that measures the the time-integrated radiative forcing due to a pulse emission of a given component, relative to a pulse emission of an equal mass of carbon dioxide (CO2)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010079",
      "name": "emission quantity value",
      "description": [
        "An emission quantity value is a quantity value that has a mass unit as unit. It is the quantity value of an emission value."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010080",
      "name": "solar-steam-electric process",
      "description": [
        "A solar-steam-electric process is a solar energy transformation that converts solar energy into electrical energy. It has two partical process: a solar thermal energy transformation and a steam power process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020046",
      "name": "solar energy transformation",
      "description": [
        "Solar energy transformation is an energy transformation that converts solar energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010081",
      "name": "solar chemical energy transformation",
      "description": [
        "A solar chemical energy transformation is a solar energy transformation that converts solar energy into chemical energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010082",
      "name": "trade",
      "description": [
        "A trade is a process in which one commodity or service is exchanged for another commodity or service."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010083",
      "name": "market participant",
      "description": [
        "A market participant is an agent who participates in a market exchange."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010084",
      "name": "reservoir",
      "description": [
        "A reservoir is an artificial object that stores liquid water and has a dam as part."
      ],
      "editor_note": [
        "Reservoirs created by dams provide water for activities such as hydro energy transformation, irrigation, human consumption, industrial use, aquaculture, and navigability. They are also used to regulate floods."
      ]
    },
    {
      "id": "OEO_00010085",
      "name": "hydro power unit",
      "description": [
        "A hydro power unit is a power generating unit that uses hydro energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010086",
      "name": "hydro powerplant",
      "description": [
        "A hydro powerplant is a powerplant having an aggregate of hydro power generating units as its power generating unit parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010087",
      "name": "run of river powerplant",
      "description": [
        "A run of river powerplant is a hydro powerplant that uses the momentarily available hydro energy of a river. It has either no reservoir or just has a small one with a maximum of 24 hours of storage."
      ],
      "editor_note": [
        "The distinction between a run of river powerplant and an hydro storage powerplant is important for modelling, but in reality not so easy. The chosen distinction follows the document: European Network of Transmission System Operators for Electricity (ENTSO-E): Hydropower modelling – New database complementing PECD, V.1.0, 12 December 2019, https://www.entsoe.eu/Documents/SDC%20documents/MAF/2019/Hydropower_Modelling_New_database_and_methodology.pdf"
      ]
    },
    {
      "id": "OEO_00010088",
      "name": "hydro storage powerplant",
      "description": [
        "A hydro storage powerplant is a hydro powerplant that uses the available hydro energy of a stationary water storage."
      ],
      "editor_note": [
        "The distinction between a run of river powerplant and an hydro storage powerplant is important for modelling, but in reality not so easy. The chosen distinction follows the document: European Network of Transmission System Operators for Electricity (ENTSO-E): Hydropower modelling – New database complementing PECD, V.1.0, 12 December 2019, https://www.entsoe.eu/Documents/SDC%20documents/MAF/2019/Hydropower_Modelling_New_database_and_methodology.pdf"
      ]
    },
    {
      "id": "OEO_00010089",
      "name": "pumped hydro storage powerplant",
      "description": [
        "A pumped hydro storage powerplant is a hydro storage powerplant which has some pumps as parts."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010090",
      "name": "pump",
      "description": [
        "A pump is an energy converting device that converts energy into kinetic or potential energy of a fluid."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010091",
      "name": "open-loop pumped hydro storage powerplant",
      "description": [
        "An open-loop pumped hydro storage powerplant is a pumped hydro storage powerplant that has natural inflows."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010092",
      "name": "closed-loop pumped hydro storage powerplant",
      "description": [
        "A closed-loop pumped hydro storage powerplant is a pumped hydro storage powerplant that has no natural inflows."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010093",
      "name": "river",
      "description": [
        "A river is liquid water that moves through permanent or seasonal flow process from elevated land towards lower elevations through a definite channel and empties either into a sea, lake, or another river or ends on land as bed seepage and evapotranspiration exceed water supply."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00010094",
      "name": "reservoir hydro storage powerplant",
      "description": [
        "A reservoir hydro storage powerplant is a hydro storage powerplant that has no pump."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020001",
      "name": "ethanol",
      "description": [
        "Ethanol is a portion of matter with the chemical formula C2H6O. It has a liquid normal state of matter and can be used as a combustion fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020003",
      "name": "energy transformation",
      "description": [
        "Energy transformation is a process in which one ore more certain types of energy as input result in certain types of energy as output."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020004",
      "name": "gas grid",
      "description": [
        "A gas grid is a supply grid that distributes gaseous fuel, e.g. methane."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020005",
      "name": "heating grid",
      "description": [
        "A heating grid is a supply grid that distributes thermal energy via circulating steam or liquids."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020007",
      "name": "gas grid component",
      "description": [
        "A gas grid component is a grid component that is part of a gas grid."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020008",
      "name": "heating grid component",
      "description": [
        "A heating grid component is a grid component that is part of a heating grid."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020009",
      "name": "switchyard",
      "description": [
        "A switchyard is an electricity grid component that connects different levels of voltage"
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020011",
      "name": "study",
      "description": [
        "A study is a project with the goal to investigate something."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020012",
      "name": "study report",
      "description": [
        "A study report is a report that is the output from some study."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_0000088",
      "name": "report",
      "description": [
        "a document assembled by an author for the purpose of providing information for the audience. A report is the output of a documenting process and has the objective to be consumed by a specific audience. Topic of the report is on something that has completed. A report is not a single figure. Examples of reports are journal article, patent application, grant progress report, case report (not patient record)"
      ],
      "editor_note": [
        "2009-03-16: comment from Darren Natale: I am slightly uneasy with the sentence \"Topic of the report is on \nsomething that has completed.\"  Should it be restricted to those things \nthat are completed?  For example, a progress report is (usually) about \nsomething that definitely has *not* been completed, or may include \n(only) projections.  I think the definition would not suffer if the \nwhole sentence is deleted.",
        "2009-03-16: this was report of results with definition: A report is a narrative object that is a formal statement of the results of an investigation, or of any matter on which definite information is required, made by some person or body instructed or required to do so.",
        "2009-03-16: work has been done on this term during during the OBI workshop winter 2009 and the current definition was considered acceptable for use in OBI. If there is a need to modify this definition please notify OBI.",
        "2009-08-10 Alan Ruttenberg: Larry Hunter suggests that this be obsoleted and replaced by 'document'. Alan restored as there are OBI dependencies and this merits further discussion",
        "disagreement about where reports go. alan: only some gene lists are reports. Is a report all the content of some document? The example of usage suggests that a report may be part of  some article. Term needs clarification"
      ]
    },
    {
      "id": "OEO_00020013",
      "name": "output data",
      "description": [
        "Output data is endogenous data that is determined by a model calculation and presented as a result."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030030",
      "name": "endogenous data",
      "description": [
        "Endogenous data is a data item whose quantity value is determined by a model."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020015",
      "name": "licence",
      "description": [
        "A licence is an information content entity that contains an official permission or permit to do, use or own something."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020016",
      "name": "model descriptor",
      "description": [
        "A model descriptor is an information content entity that contains information about some model."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020017",
      "name": "analytical appoach",
      "description": [
        "A analytical approach is a model descriptor that contains information about the analysis strategy of a model."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020018",
      "name": "methodical focus",
      "description": [
        "A methodical focus is a model descriptor that specifies the primary calculation method used in a model."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020019",
      "name": "primary modelling purpose",
      "description": [
        "A primary modelling purpose is a model descriptor stating the main purpose of a model."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020022",
      "name": "model documentation",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00020031",
      "name": "model factsheet",
      "description": [
        "A model factsheet is a model descriptor that contains a brief description of all relevant model information."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020032",
      "name": "study region",
      "description": [
        "A study region is a spatial region that is under investigation and consists entirely of one or more subregions."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000006",
      "name": "spatial region",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: Spatial regions do not participate in processes.",
        "Spatial region doesn't have a closure axiom because the subclasses don't exhaust all possibilites. An example would be the union of a spatial point and a spatial line that doesn't overlap the point, or two spatial lines that intersect at a single point. In both cases the resultant spatial region is neither 0-dimensional, 1-dimensional, 2-dimensional, or 3-dimensional."
      ]
    },
    {
      "id": "OEO_00020033",
      "name": "subregion",
      "description": [
        "A subregion is a spatial region that is a part of spatial region."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020034",
      "name": "study subregion",
      "description": [
        "A study subregion is a subregion of a study region."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020035",
      "name": "considered region",
      "description": [
        "A considered region is a spatial region that is used in an analysis."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020036",
      "name": "interacting region",
      "description": [
        "An interacting region is a spatial region that interacts with a study region. It is part of a considered region, but not a study region."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020037",
      "name": "radiation",
      "description": [
        "Radiation is the process of emitting or transmitting energy in the form of waves or particles through a spatial region or a material entity."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020038",
      "name": "solar radiation",
      "description": [
        "Solar radiation is radiation that is emitted by the sun."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020039",
      "name": "energy carrier",
      "description": [
        "An energy carrier is a material entity that has the disposition energy carrier disposition."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000040",
      "name": "material entity",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: Material entities (continuants) can preserve their identity even while gaining and losing material parts. Continuants are contrasted with occurrents, which unfold themselves in successive temporal parts or phases [60",
        "BFO 2 Reference: Object, Fiat Object Part and Object Aggregate are not intended to be exhaustive of Material Entity. Users are invited to propose new subcategories of Material Entity.",
        "BFO 2 Reference: ‘Matter’ is intended to encompass both mass and energy (we will address the ontological treatment of portions of energy in a later version of BFO). A portion of matter is anything that includes elementary particles among its proper or improper parts: quarks and leptons, including electrons, as the smallest particles thus far discovered; baryons (including protons and neutrons) at a higher level of granularity; atoms and molecules at still higher levels, forming the cells, organs, organisms and other material entities studied by biologists, the portions of rock studied by geologists, the fossils studied by paleontologists, and so on.Material entities are three-dimensional entities (entities extended in three spatial dimensions), as contrasted with the processes in which they participate, which are four-dimensional entities (entities extended also along the dimension of time).According to the FMA, material entities may have immaterial entities as parts – including the entities identified below as sites; for example the interior (or ‘lumen’) of your small intestine is a part of your body. BFO 2.0 embodies a decision to follow the FMA here."
      ]
    },
    {
      "id": "OEO_00020043",
      "name": "wind energy transformation",
      "description": [
        "Wind energy transformation is an energy transformation that converts wind energy to electrical energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020045",
      "name": "potential energy",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00020047",
      "name": "solar thermal energy transformation",
      "description": [
        "Solar thermal energy transformation is a solar energy transformation that converts solar energy into thermal energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020048",
      "name": "photovoltaic energy transformation",
      "description": [
        "Photovoltaic energy transformation is a solar energy transformation that converts solar energy into electrical energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020050",
      "name": "renewable energy carrier",
      "description": [
        "A renewable energy carrier is an energy carrier that has a renewable origin."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020053",
      "name": "nuclear fission",
      "description": [
        "Nuclear fission is a process of nuclear reaction or a radioactive decay in which the nucleus of an atom splits into two or more smaller, lighter nuclei."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020054",
      "name": "nuclear energy transformation",
      "description": [
        "Nuclear energy transformation is an energy transformation that converts nuclear binding energy to thermal energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020058",
      "name": "rock",
      "description": [
        "A rock is a portion of matter that is a naturally occurring solid aggregate of minerals or mineraloid matter that is part of the earth's crust."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020059",
      "name": "geothermal heat transfer",
      "description": [
        "Geothermal heat transfer is a heat transfer from the earth crust to a transportable material entity. E.g. a liquid or gas."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140101",
      "name": "heat transfer",
      "description": [
        "Heat transfer is an energy transformation with thermal energy as the only input and thermal energy as the only output."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020060",
      "name": "fuel market exchange",
      "description": [
        "A fuel market exchange is an energy market exchange where fuels like oil, coal, renewable fuels, and natural gas are traded."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020065",
      "name": "energy market exchange",
      "description": [
        "An energy market exchange is a market exchange in which energy commodities are traded."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020063",
      "name": "emission certificate",
      "description": [
        "An emission certificate is a licence that permits its holder/owner a specific emission value. An emission certificate can be traded at a CO2 market exchange."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020064",
      "name": "EU allowance",
      "description": [
        "An EU Allowance (EUA) is an emission certificate used in the European Union Emissions Trading System (EU ETS). It permits the emission of a CO2 equivalent quantity of 1 tonne."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020069",
      "name": "market exchange",
      "description": [
        "A market exchange is an organisation that has the market exchange role."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020066",
      "name": "fuel commodity role",
      "description": [
        "Fuel commodity role is the commodity role of fuels."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00040011",
      "name": "commodity role",
      "description": [
        "A commodity role is a role that inheres in something that is used in commerce and is exchangeable with other commodities of the same type."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020067",
      "name": "commodity",
      "description": [
        "A commodity is a material entity that bears the commodity role."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020068",
      "name": "fuel commodity",
      "description": [
        "A fuel commodity is a commodity that is a fuel."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020072",
      "name": "analysis scope",
      "description": [
        "An analysis scope is an information content entity that describes the boundaries of what a study or scenario covers."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020074",
      "name": "industrial grid-bound heating",
      "description": [
        "Industrial grid-bound heating is a grid-bound heating transfer to industrial installations."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00020075",
      "name": "emission market exchange",
      "description": [
        "An emission market exchange is a market exchange where emission certificates are traded"
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030000",
      "name": "anthropogenic",
      "description": [
        "anthropogenic is an origin of portions of matter or energies created by human activity."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030001",
      "name": "biogenic",
      "description": [
        "biogenic is an origin of portions of matter made by or produced from life forms."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030002",
      "name": "fossil",
      "description": [
        "fossil is an origin of portions of matter created from organic material by geolocial processes lasting thousands or millions of years.\n\nIn real world, fossils are from biogenic origin some thousands or millions of years ago. However, this is irrelevant in the energy modelling domain."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030003",
      "name": "geogenic",
      "description": [
        "geogenic is an origin of portions of matter that are the result of geological processes."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030004",
      "name": "renewable",
      "description": [
        "Renewable is an origin of portions of matter or energies that replenish on a human time scale."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030005",
      "name": "synthetic",
      "description": [
        "synthetic is an origin of portions of matter created artifically by a chemical process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030007",
      "name": "climate scenario",
      "description": [
        "A climate scenario is a scenario that describes a possible future state of a climate system."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030008",
      "name": "economic scenario",
      "description": [
        "An economic scenario is a scenario that describes a possible future state of an economic system."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030009",
      "name": "emission scenario",
      "description": [
        "An emission scenario is a scenario that describes a possible emission trajectory."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030010",
      "name": "energy scenario",
      "description": [
        "An energy scenario is a scenario that describes a possible future state of an energy system."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030015",
      "name": "energy system model",
      "description": [
        "An energy system model is a model of an energy system."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030016",
      "name": "organisational energy producer",
      "description": [
        "An organisational energy producer is an organisation that undertakes the generation of electricity and/or heat.\""
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030017",
      "name": "energy autoproducer",
      "description": [
        "An energy autoproducer is an organisational energy producer who produces electrical energy and/or heat wholly or partly for their own use as an activity which supports their primary activity."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030018",
      "name": "main activity energy producer",
      "description": [
        "A main activity energy producer is an organisational energy producer whose primary activity is electrical energy and/or heat production."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000003",
      "name": "occurrent",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: every occurrent that is not a temporal or spatiotemporal region is s-dependent on some independent continuant that is not a spatial region",
        "BFO 2 Reference: s-dependence obtains between every process and its participants in the sense that, as a matter of necessity, this process could not have existed unless these or those participants existed also. A process may have a succession of participants at different phases of its unfolding. Thus there may be different players on the field at different times during the course of a football game; but the process which is the entire game s-depends_on all of these players nonetheless. Some temporal parts of this process will s-depend_on on only some of the players.",
        "Occurrent doesn't have a closure axiom because the subclasses don't necessarily exhaust all possibilites. An example would be the sum of a process and the process boundary of another process.",
        "Simons uses different terminology for relations of occurrents to regions: Denote the spatio-temporal location of a given occurrent e by 'spn[e]' and call this region its span. We may say an occurrent is at its span, in any larger region, and covers any smaller region. Now suppose we have fixed a frame of reference so that we can speak not merely of spatio-temporal but also of spatial regions (places) and temporal regions (times). The spread of an occurrent, (relative to a frame of reference) is the space it exactly occupies, and its spell is likewise the time it exactly occupies. We write 'spr[e]' and `spl[e]' respectively for the spread and spell of e, omitting mention of the frame."
      ]
    },
    {
      "id": "OEO_00030024",
      "name": "energy system",
      "description": [
        "An energy system is a system of spatially extended linked energy sources and sinks."
      ],
      "editor_note": []
    },
    {
      "id": "RO_0002577",
      "name": "system",
      "description": [
        "A material entity consisting of multiple components that are causally integrated."
      ],
      "editor_note": [
        "May be replaced by a BFO class, as discussed in http://www.jbiomedsem.com/content/4/1/43"
      ]
    },
    {
      "id": "OEO_00030025",
      "name": "supply system",
      "description": [
        "A supply system is a system that connects producers and consumers."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030026",
      "name": "primary energy production",
      "description": [
        "Primary energy production is a process that prepares raw material for its use as primary energy carrier."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030027",
      "name": "primary energy carrier mining",
      "description": [
        "Primary energy carrier mining is a primary energy production process that recovers non-renewable energy carriers from its natural site."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030028",
      "name": "primary energy carrier harvest",
      "description": [
        "Primary energy carrier harvest is a primary energy production process that collects solid biomass from its natural site."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030029",
      "name": "exogenous data",
      "description": [
        "Exogenous data is a data item whose quantity value is determined outside of a model and is imposed on a model."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_0000027",
      "name": "data item",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00030031",
      "name": "start time",
      "description": [
        "A start time is a zero-dimensional temporal region that indicates the beginning of a one-dimensional temporal region."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000148",
      "name": "zero-dimensional temporal region",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00030032",
      "name": "ending time",
      "description": [
        "An ending time is a zero-dimensional temporal region that indicates the end of a one-dimensional temporal region."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030033",
      "name": "time step",
      "description": [
        "A time step is a one-dimensional temporal region that has a start time and an endtime and thus a finite duration."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000038",
      "name": "one-dimensional temporal region",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: A temporal interval is a special kind of one-dimensional temporal region, namely one that is self-connected (is without gaps or breaks)."
      ]
    },
    {
      "id": "OEO_00030034",
      "name": "time series",
      "description": [
        "A time series is a data set that references to a set of time steps or zero-dimensional temporal regions."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00030035",
      "name": "duration",
      "description": [
        "A duration is a quantity value indicating the time span of a one-dimensional temporal region, measured in a time unit."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00040002",
      "name": "market exchange role",
      "description": [
        "A role of an organisation, association, or group of persons, whether incorporated or unincorporated, which constitutes, maintains, or provides a facility for bringing together purchasers and sellers of financial instruments, commodities, or other products, services, or goods, and includes the market place and facilities maintained by the exchange"
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00040003",
      "name": "monetary price",
      "description": [
        "A monetary price is an economic value that describes the amount of money requested, expected, required or given in exchange for something else."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140012",
      "name": "economic value",
      "description": [
        "An economic value is a quantity value that is economically relevant."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00040004",
      "name": "currency",
      "description": [
        "A unit which is a measure of the medium of an exchange value, defined by reference to the geographical location of the monetary authorities responsible for it."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00040005",
      "name": "trader",
      "description": [
        "A trader is a market participant that engages in the transfer of financial assets in any financial market on behalf of a client or a financial services provider."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00040006",
      "name": "request",
      "description": [
        "A request is a process whereby an agent asks another agent for something or to do something."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00040007",
      "name": "price request",
      "description": [
        "A price request is a request in which an agent asks another agent for a price."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00040008",
      "name": "marginal cost",
      "description": [
        "Marginal cost is the economic value that corresponds to the change in the total cost that arises when the quantity produced is incremented by one unit; that is, it is the cost of producing one more unit of a good."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00040009",
      "name": "cost",
      "description": [
        "Cost is an economic value that describes the amount of money needed to buy, make, or do a thing."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050000",
      "name": "industrial process",
      "description": [
        "An industrial process is a process that has output object or object aggregates that are economic goods. An industrial process consists of several subprocesses. Examples of subprocesses that can be involved in an industrial process are energy transformations, mechanical operations and chemical reactions."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050001",
      "name": "fuel-powered electricity generation",
      "description": [
        "Fuel-powered electricity generation is a transformation that contains at least two sub process: An energy transformation of chemical energy from fuel into electrical energy and an emission process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050002",
      "name": "kilojoule",
      "description": [
        "An energy unit which is equal to 1,000 joules."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000111",
      "name": "energy unit",
      "description": [
        "A unit which is a standard measure of the work done by a certain force (gravitational, electric, magnetic, force of inertia, etc)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050003",
      "name": "megajoule",
      "description": [
        "An energy unit which is equal to 1,000,000 joules."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050004",
      "name": "gigajoule",
      "description": [
        "An energy unit which is equal to 10^9 joules."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050005",
      "name": "terajoule",
      "description": [
        "An energy unit which is equal to 10^12 joules."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050006",
      "name": "petajoule",
      "description": [
        "An energy unit which is equal to 10^15 joules."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050007",
      "name": "exajoule",
      "description": [
        "An energy unit which is equal to 10^18 joules."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050008",
      "name": "megawatt-hour",
      "description": [
        "An energy unit which is equal to 1,000,000 watt-hours."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050009",
      "name": "terawatt-hour",
      "description": [
        "An energy unit which is equal to 10^12 watt-hours."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050010",
      "name": "petawatt-hour",
      "description": [
        "An energy unit which is equal to 10^15 watt-hours."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050011",
      "name": "gigawatt-hour",
      "description": [
        "An energy unit which is equal to 10^9 watt-hours."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050016",
      "name": "final energy consumption",
      "description": [
        "Final energy consumption is the consumption of energy delivered to and consumed by end users."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140039",
      "name": "consumption",
      "description": [
        "Consumption is the process of using something and thereby reducing its amount."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050017",
      "name": "gross inland energy consumption",
      "description": [
        "Gross inland energy consumption is the total consumption of energy in a spatial region (e.g. a country)."
      ],
      "editor_note": [
        "Gross inland energy consumption represents the quantity of energy necessary to satisfy inland consumption of the spatial region (e.g. a country) under consideration.\n\nGross inland energy consumption covers:\n  - consumption by the energy sector itself;\n  - distribution and transformation losses;\n  - final energy consumption by end users;\n  - 'statistical differences' (not already captured in the figures on primary energy consumption and final energy consumption).\n\nGross inland energy consumption does not include energy (fuel oil) provided to international maritime bunkers."
      ]
    },
    {
      "id": "OEO_00050018",
      "name": "primary energy consumption",
      "description": [
        "Primary energy consumption is the total consumption of energy in a spatial region excluding the non-energetic use of fuels."
      ],
      "editor_note": [
        "Primary energy consumption covers consumption of the energy sector itself, losses during transformation (for example, from oil or gas into electricity) and distribution of energy, and the final consumption by end users. It excludes energy carriers used for non-energy purposes (such as petroleum not used not for combustion but for producing plastics)."
      ]
    },
    {
      "id": "OEO_00050019",
      "name": "energy amount value",
      "description": [
        "An energy amount value is a quantity value that has an energy unit as unit."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00050020",
      "name": "steam-electric process",
      "description": [
        "A steam-electric process is an energy transformation that converts thermal energy to electrical energy. A steam turbine and an electro motive generator are participating in a steam-electric process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00090000",
      "name": "volumetric flow rate value",
      "description": [
        "A volumetric flow rate value is a quantity value that has a volumetric flow rate unit as unit."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00090001",
      "name": "funder",
      "description": [
        "A funder is a sponsor that supports by giving money."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140009",
      "name": "sponsor",
      "description": [
        "A sponsor is an agent that supports a person, organisation, or project by giving money, allowance of kind, services or other help."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00090002",
      "name": "public funder",
      "description": [
        "A public funder is a funder that gives public money."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00090003",
      "name": "private funder",
      "description": [
        "A private funder is a funder that gives private money."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00110001",
      "name": "steam",
      "description": [
        "Steam is water that has a gaseous state of matter."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00110002",
      "name": "water flow",
      "description": [
        "Water flow is a process of liquid water moving."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00110003",
      "name": "water flow rate",
      "description": [
        "Water flow rate is the process attribute of water flow that quantifies the water volume per time unit."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00110004",
      "name": "hydro energy transformation",
      "description": [
        "Hydro energy transformation is an energy transformation that converts hydro energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00110005",
      "name": "hydroelectric energy transformation",
      "description": [
        "Hydroelectric energy transformation is an hydro energy transformation that converts hydro energy to electrical energy."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140000",
      "name": "hub height",
      "description": [
        "Hub height is a quality of a wind energy converting unit that measures the distance between surface and centre-line of the wind rotor."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140001",
      "name": "length value",
      "description": [
        "Length value is a quantity value that has a length unit as unit."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140003",
      "name": "transport",
      "description": [
        "Transport is the process of moving people or goods from one place to another."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140004",
      "name": "international transport",
      "description": [
        "International transport is a transport process between different countries or within the same country via another country."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140005",
      "name": "freight transport",
      "description": [
        "Freight transport is a transport process which moves goods from one place to another."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140006",
      "name": "private transport",
      "description": [
        "Private transport is a transport process in which people use their own vehicle for movement e.g. bicycle, motorcycle and cars, or walking."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140007",
      "name": "public transport",
      "description": [
        "Public transport is a transport process in which a number of passengers share a common public transport facility."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140013",
      "name": "gross domestic product",
      "description": [
        "A gross domestic product is an economic value that represents the broadest measure of aggregate economic activity, measuring the total unduplicated market value of all final goods and services produced within a statistical area in a period."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140023",
      "name": "gross value added",
      "description": [
        "Gross value added is an economic value that is the value of goods and services produced in a sector of an economy, measuring that sector's contribution to gross domestic product (GDP). It is calculated as the monetary value of products and services produced, less the value of intermediate consumption."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140024",
      "name": "validation",
      "description": [
        "Validation is the process of checking if something works correctly."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140025",
      "name": "cross-checking against other models",
      "description": [
        "Cross-checking against other models is a validation where a model gets cross-checked against other models of the domain."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140026",
      "name": "checking against measurements",
      "description": [
        "Checking against measurements is a validation where something gets checked by using relevant measurements."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140027",
      "name": "checking against empirical data",
      "description": [
        "Checking against empirical data is a validation where something gets checked against empirical data."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140033",
      "name": "chemical reaction",
      "description": [
        "A chemical reaction is a transformation that involves the interconversion of chemical species."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140034",
      "name": "redox reaction",
      "description": [
        "A redox reaction is a chemical reaction in which the oxidation of one reactant is coupled to the reduction of a second reactant."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140035",
      "name": "oxidation",
      "description": [
        "Oxidation is a chemical reaction that describes the loss of electrons of an atom, an ion, or of certain atoms in a molecule and is a part of a redox reaction."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140036",
      "name": "reduction",
      "description": [
        "Reduction is a chemical reaction that describes the gain of electrons of an atom, an ion, or of certain atoms in a molecule and is a part of a redox reaction."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140037",
      "name": "electrochemical reaction",
      "description": [
        "An electrochemical reaction is a chemical reaction that describes the overall reactions of individual redox reactions being separated but connected by an external electric circuit and an intervening electrolyte."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140038",
      "name": "combustion",
      "description": [
        "Combustion is an exothermic redox reaction between a fuel (the reductant) and an oxidant (usually atmospheric oxygen) which is initiated by a ignition source."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140040",
      "name": "demand",
      "description": [
        "A demand is a realizable entity that is characterised by a person, organisation or object needing it for a specific purpose."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000017",
      "name": "realizable entity",
      "description": [],
      "editor_note": []
    },
    {
      "id": "OEO_00140043",
      "name": "time stamp",
      "description": [
        "A time stamp is a zero-dimensional temporal region that is used to describe a time step."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140044",
      "name": "time stamp alignment",
      "description": [
        "A time stamp alignment is a data descriptor that indicates the position of a time stamp in a time step."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140049",
      "name": "energy conversion efficiency",
      "description": [
        "Energy conversion efficiency is a process attribute describing the ratio between the input of an energy transformation and the outputs that are used."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140050",
      "name": "efficiency value",
      "description": [
        "An efficiency value is a quantity value stating the ratio between a process's inputs and the outputs that are used."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140051",
      "name": "coefficient of performance value",
      "description": [
        "A coefficient of performance value is a quantity value stating the ratio between the work input and the total output of an energy conversion process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140052",
      "name": "energy conversion performance",
      "description": [
        "Energy conversion performance is a process attribute describing the ratio between the non-heat input of an energy transformation and the outputs that are used."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140056",
      "name": "flow potential",
      "description": [
        "A flow potential is a quantity value that describes the upper limit of an input or output of a process in a spatial region of reference per unit time."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140057",
      "name": "theoretical flow potential",
      "description": [
        "A theoretical flow potential is a type of flow potential that identifies the physical upper limit of an input or output of a process in a spatial region of reference per unit time."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140058",
      "name": "technological flow potential",
      "description": [
        "A technological flow potential is a type of a flow potential derived from a theoretical flow potential, taking account of the annual efficiency of the respective conversion technology and the additional restrictions regarding the area that is realistically available for energy generation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140059",
      "name": "economic flow potential",
      "description": [
        "An economic flow potential is a type of flow potential that identifies the proportion of the technological potential that can be utilised economically (based on economic boundary conditions)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140060",
      "name": "developable flow potential",
      "description": [
        "A developable flow potential is a type of flow potential that describes the fraction of the economic potential that can be developed under realistic conditions (regulations, environmental and social restrictions)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140061",
      "name": "sustainable flow potential",
      "description": [
        "A sustainable flow potential is a type of flow potential that takes into account all aspects of sustainability, which usually requires careful consideration and evaluation of different ecological and socio-economic aspects. The differentiation of the sustainable potential is blurred, since ecological aspects may already have been considered for the technological or economic potential, depending on the author."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140062",
      "name": "stock potential",
      "description": [
        "A stock potential is a quantity value that describes the upper limit of a stock of a source or sink in a spatial region of reference."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140063",
      "name": "theoretical stock potential",
      "description": [
        "A theoretical stock potential is a type of stock potential that identifies the physical upper limit of a stock of a source or sink in a spatial region of reference."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140064",
      "name": "technological stock potential",
      "description": [
        "A technological stock potential is a type of a stock potential derived from a theoretical stock potential, taking account of the annual efficiency of the respective conversion technology and the additional restrictions regarding the area that is realistically available for energy generation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140065",
      "name": "economic stock potential",
      "description": [
        "An economic stock potential is a type of stock potential that identifies the proportion of the technological potential that can be utilised economically (based on economic boundary conditions)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140066",
      "name": "developable stock potential",
      "description": [
        "A developable stock potential is a type of stock potential that describes the fraction of the economic potential that can be developed under realistic conditions (regulations, environmental and social restrictions)."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140067",
      "name": "sustainable stock potential",
      "description": [
        "A sustainable stock potential is a type of stock potential that takes into account all aspects of sustainability, which usually requires careful consideration and evaluation of different ecological and socio-economic aspects. The differentiation of the sustainable potential is blurred, since ecological aspects may already have been considered for the technological or economic potential, depending on the author."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140068",
      "name": "aggregation type",
      "description": [
        "An aggregation type is a data descriptor that contains information on the aggregation method applied on a data set."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140075",
      "name": "primary energy carrier disposition",
      "description": [
        "Primary energy carrier disposition is an energy carrier disposition of material entities that are extracted directly from natural resources or that are natural energy flows."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140076",
      "name": "secondary energy carrier disposition",
      "description": [
        "Secondary energy carrier disposition is an energy carrier disposition of material entities that are manufactured from primary energy carriers or from a different form of secondary energy carriers."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140077",
      "name": "final energy carrier disposition",
      "description": [
        "Final energy carrier disposition is an energy carrier disposition of material entities that are delivered to energy consumers for their use."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140078",
      "name": "primary energy carrier",
      "description": [
        "A primary energy carrier is an energy carrier that has the disposition primary energy carrier disposition."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140079",
      "name": "secondary energy carrier",
      "description": [
        "A secondary energy carrier is an energy carrier that has the disposition secondary energy carrier disposition."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140080",
      "name": "final energy carrier",
      "description": [
        "A final energy carrier is an energy carrier that has the disposition final energy carrier disposition."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140081",
      "name": "emission value",
      "description": [
        "An emission value is a process attribute that quantifies the output of an emission process. It can be calculated using the emission factor of that emission process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140082",
      "name": "greenhouse gas emission value",
      "description": [
        "A greenhouse gas emission value is an emission value that quantifies the output of a greenhouse gas emission process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140083",
      "name": "carbon dioxide equivalent quantity",
      "description": [
        "A carbon dioxide equivalent quantity is a greenhouse gas emission value that quantifies the combined effect of all emitted greenhouse gases by giving an equivalent amount of CO2 which would have the same effect on the climate."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140091",
      "name": "plutonium",
      "description": [
        "Plutonium is a portion of matter with the chemical formula Pu. It has a solid normal state of matter."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140092",
      "name": "thorium",
      "description": [
        "Thorium is a portion of matter with the chemical formula Th. It has a solid normal state of matter."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140098",
      "name": "quality control flag",
      "description": [
        "A quality control flag is a data descriptor that describes the measurement quality of a data set, e.g. a time series."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140099",
      "name": "goal description",
      "description": [
        "A goal description is an information content entity that contains statements about a desired future state of a system that a person or organisation envisions or plans, or to which it commits."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140102",
      "name": "heat exchanger",
      "description": [
        "A heat exchanger is an energy converting device that is used for a heat transfer process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140104",
      "name": "natural ambient thermal energy",
      "description": [
        "Natural ambient thermal energy is ambient thermal energy that has a renewable origin."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140105",
      "name": "artificial ambient thermal energy",
      "description": [
        "Artificial ambient thermal energy is ambient thermal energy that has an anthropogenic origin."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140106",
      "name": "ambient thermal energy transfer",
      "description": [
        "Ambient thermal energy transfer is a heat transfer from the ambient air to a transportable material entity."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140109",
      "name": "contract",
      "description": [
        "A contract is a document that contains an agreement between two or more competent agents to which those agents agree to be legally bound."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140116",
      "name": "fluid",
      "description": [
        "A fluid is a material entity which is a liquid, gas or plasma."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140117",
      "name": "delivery time",
      "description": [
        "Delivery time is a one-dimensional temporal region expressing the amount of time that it takes for goods that have been bought to arrive at the place where they are wanted."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140118",
      "name": "delivery time point",
      "description": [
        "A delivery time point is a zero-dimensional temporal region expressing the point in time when goods that have been bought arrive at the place where they are wanted."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140119",
      "name": "sender",
      "description": [
        "A sender is an agent who initiates a communication."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140120",
      "name": "receiver",
      "description": [
        "A receiver is an agent who obtains information from a sender."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140121",
      "name": "bid",
      "description": [
        "A bid is a document describing an offer made by an agent to another agent in an effort to exchange commodities or services via terms relating to price and quantity which will be part of the resulting contract."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140122",
      "name": "award",
      "description": [
        "An award is a document that signifies that a supplier for a particular commodity or service specified in a bid has been accepted."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140123",
      "name": "provider",
      "description": [
        "A provider is an agent that transfers commodities or services to other agents."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140124",
      "name": "service",
      "description": [
        "A service is a process that is an intangible actitvity performed by some agent for the benefit of another agent."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140125",
      "name": "delivery interval",
      "description": [
        "A delivery interval is the duration between repeated deliveries of services or commodities."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140126",
      "name": "planned availability",
      "description": [
        "Planned availabilty is a quality that describes the amount of time a power plant is planned to be operational per year."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140127",
      "name": "fraction value",
      "description": [
        "A fraction value is a quantity value that has a fraction as it's unit."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140128",
      "name": "block size",
      "description": [
        "Block size is the declared net capacity of a power generating unit."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230002",
      "name": "declared net capacity",
      "description": [
        "Declared net capacity is the quantity value stating the maximum power a power generating unit or a power plant can deliver to the electrical grid. It equals the sum of the rated powers of all plant generators minus all power used internally within the plant."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140129",
      "name": "unplanned availability",
      "description": [
        "Unplanned availabilty is a quality that describes the amount of time a power plant is planned to be operational per year, but is not operation."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140130",
      "name": "power plant operator",
      "description": [
        "A power plant operator is an agent that operates an electric utility generation station."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140131",
      "name": "conventional trader",
      "description": [
        "A trader that trades the power of fossil fuel power plants."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140133",
      "name": "RE-share",
      "description": [
        "RE-share is a process attribute that indicates the fraction of renewable energy related to the total energy of an energy generation or consumption process."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00140134",
      "name": "hydrogen fuel cell",
      "description": [
        "A hydrogen fuel cell is a fuel cell that uses hydrogen."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230000",
      "name": "storage capacity",
      "description": [
        "Storage capacity is the quantity value stating the maximum energy an energy storage object can store."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230001",
      "name": "power rating",
      "description": [
        "Power rating is the quantity value stating the maximum power an energy converting device can convert."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230003",
      "name": "nameplate capacity",
      "description": [
        "Nameplate capacity is the quantity value stating the maximum power a power generating unit or a power plant can generate, and the sum of the power ratings of all energy converting devices of that power plant."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230013",
      "name": "population",
      "description": [
        "A population is an aggregate of people in a spatial region."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230014",
      "name": "urban population",
      "description": [
        "An urban population is a population living in urban areas, as defined by national statistical offices."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230015",
      "name": "rural population",
      "description": [
        "A rural population is a population living in rural areas, as defined by national statistical offices."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230016",
      "name": "labour force",
      "description": [
        "The labour force is the population of people ages 15 and older who supply labour to the production of goods and services.  It includes people who are currently employed and people who are unemployed but seeking work as well as first-time job-seekers."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230017",
      "name": "working age population",
      "description": [
        "The working age population is the population of people aged 15 to 65."
      ],
      "editor_note": []
    },
    {
      "id": "OEO_00230021",
      "name": "photon",
      "description": [
        "A photon is a portion of matter that is a light particle."
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000002",
      "name": "continuant",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: Continuant entities are entities which can be sliced to yield parts only along the spatial dimension, yielding for example the parts of your table which we call its legs, its top, its nails. ‘My desk stretches from the window to the door. It has spatial parts, and can be sliced (in space) in two. With respect to time, however, a thing is a continuant.’ [60, p. 240",
        "Continuant doesn't have a closure axiom because the subclasses don't necessarily exhaust all possibilites. For example, in an expansion involving bringing in some of Ceuster's other portions of reality, questions are raised as to whether universals are continuants"
      ]
    },
    {
      "id": "BFO_0000001",
      "name": "entity",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: In all areas of empirical inquiry we encounter general terms of two sorts. First are general terms which refer to universals or types:animaltuberculosissurgical procedurediseaseSecond, are general terms used to refer to groups of entities which instantiate a given universal but do not correspond to the extension of any subuniversal of that universal because there is nothing intrinsic to the entities in question by virtue of which they – and only they – are counted as belonging to the given group. Examples are: animal purchased by the Emperortuberculosis diagnosed on a Wednesdaysurgical procedure performed on a patient from Stockholmperson identified as candidate for clinical trial #2056-555person who is signatory of Form 656-PPVpainting by Leonardo da VinciSuch terms, which represent what are called ‘specializations’ in [81",
        "Entity doesn't have a closure axiom because the subclasses don't necessarily exhaust all possibilites. For example Werner Ceusters 'portions of reality' include 4 sorts, entities (as BFO construes them), universals, configurations, and relations. It is an open question as to whether entities as construed in BFO will at some point also include these other portions of reality. See, for example, 'How to track absolutely everything' at http://www.referent-tracking.com/_RTU/papers/CeustersICbookRevised.pdf"
      ]
    },
    {
      "id": "BFO_0000004",
      "name": "independent continuant",
      "description": [
        "b is an independent continuant = Def. b is a continuant which is such that there is no c and no t such that b s-depends_on c at t. (axiom label in BFO2 Reference: [017-002])"
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000008",
      "name": "temporal region",
      "description": [],
      "editor_note": [
        "Temporal region doesn't have a closure axiom because the subclasses don't exhaust all possibilites. An example would be the mereological sum of a temporal instant and a temporal interval that doesn't overlap the instant. In this case the resultant temporal region is neither 0-dimensional nor 1-dimensional"
      ]
    },
    {
      "id": "BFO_0000009",
      "name": "two-dimensional spatial region",
      "description": [],
      "editor_note": []
    },
    {
      "id": "BFO_0000011",
      "name": "spatiotemporal region",
      "description": [],
      "editor_note": []
    },
    {
      "id": "BFO_0000020",
      "name": "specifically dependent continuant",
      "description": [
        "b is a specifically dependent continuant = Def. b is a continuant & there is some independent continuant c which is not a spatial region and which is such that b s-depends_on c at every time t during the course of b’s existence. (axiom label in BFO2 Reference: [050-003])"
      ],
      "editor_note": [
        "Specifically dependent continuant doesn't have a closure axiom because the subclasses don't necessarily exhaust all possibilites. We're not sure what else will develop here, but for example there are questions such as what are promises, obligation, etc."
      ]
    },
    {
      "id": "BFO_0000018",
      "name": "zero-dimensional spatial region",
      "description": [],
      "editor_note": []
    },
    {
      "id": "BFO_0000024",
      "name": "fiat object part",
      "description": [],
      "editor_note": [
        "BFO 2 Reference: Most examples of fiat object parts are associated with theoretically drawn divisions"
      ]
    },
    {
      "id": "BFO_0000026",
      "name": "one-dimensional spatial region",
      "description": [],
      "editor_note": []
    },
    {
      "id": "BFO_0000028",
      "name": "three-dimensional spatial region",
      "description": [],
      "editor_note": []
    },
    {
      "id": "BFO_0000029",
      "name": "site",
      "description": [],
      "editor_note": []
    },
    {
      "id": "BFO_0000035",
      "name": "process boundary",
      "description": [
        "p is a process boundary =Def. p is a temporal part of a process & p has no proper temporal parts. (axiom label in BFO2 Reference: [084-001])"
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000140",
      "name": "continuant fiat boundary",
      "description": [
        "b is a continuant fiat boundary = Def. b is an immaterial entity that is of zero, one or two dimensions and does not include a spatial region as part. (axiom label in BFO2 Reference: [029-001])"
      ],
      "editor_note": [
        "BFO 2 Reference: a continuant fiat boundary is a boundary of some material entity (for example: the plane separating the Northern and Southern hemispheres; the North Pole), or it is a boundary of some immaterial entity (for example of some portion of airspace). Three basic kinds of continuant fiat boundary can be distinguished (together with various combination kinds [29",
        "BFO 2 Reference: In BFO 1.1 the assumption was made that the external surface of a material entity such as a cell could be treated as if it were a boundary in the mathematical sense. The new document propounds the view that when we talk about external surfaces of material objects in this way then we are talking about something fiat. To be dealt with in a future version: fiat boundaries at different levels of granularity.More generally, the focus in discussion of boundaries in BFO 2.0 is now on fiat boundaries, which means: boundaries for which there is no assumption that they coincide with physical discontinuities. The ontology of boundaries becomes more closely allied with the ontology of regions.",
        "Continuant fiat boundary doesn't have a closure axiom because the subclasses don't necessarily exhaust all possibilites. An example would be the mereological sum of two-dimensional continuant fiat boundary and a one dimensional continuant fiat boundary that doesn't overlap it. The situation is analogous to temporal and spatial regions."
      ]
    },
    {
      "id": "BFO_0000142",
      "name": "one-dimensional continuant fiat boundary",
      "description": [],
      "editor_note": []
    },
    {
      "id": "BFO_0000144",
      "name": "process profile",
      "description": [
        "b is a process_profile =Def. there is some process c such that b process_profile_of c (axiom label in BFO2 Reference: [093-002])"
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000145",
      "name": "relational quality",
      "description": [
        "b is a relational quality = Def. for some independent continuants c, d and for some time t: b quality_of c at t & b quality_of d at t. (axiom label in BFO2 Reference: [057-001])"
      ],
      "editor_note": []
    },
    {
      "id": "BFO_0000146",
      "name": "two-dimensional continuant fiat boundary",
      "description": [],
      "editor_note": []
    },
    {
      "id": "BFO_0000147",
      "name": "zero-dimensional continuant fiat boundary",
      "description": [],
      "editor_note": [
        "zero dimension continuant fiat boundaries are not spatial points. Considering the example 'the quadripoint where the boundaries of Colorado, Utah, New Mexico, and Arizona meet' : There are many frames in which that point is zooming through many points in space. Whereas, no matter what the frame, the quadripoint is always in the same relation to the boundaries of Colorado, Utah, New Mexico, and Arizona."
      ]
    },
    {
      "id": "BFO_0000182",
      "name": "history",
      "description": [],
      "editor_note": []
    },
    {
      "id": "IAO_0000104",
      "name": "plan specification",
      "description": [
        "A directive information entity with action specifications and objective specifications as parts that, when concretized, is realized in a process in which the bearer tries to achieve the objectives by taking the actions specified."
      ],
      "editor_note": [
        "2009-03-16: provenance: a term a plan was proposed for OBI (OBI_0000344) , edited by the PlanAndPlannedProcess branch. Original definition was \" a plan is a specification of a process that is realized by an actor to achieve the objective specified as part of the plan\". It has been subsequently moved to IAO where the objective for which the original term was defined was satisfied with the definitionof this, different, term.",
        "2014-03-31: A plan specification can have other parts, such as conditional specifications.",
        "Alternative previous definition: a plan is a set of instructions that specify how an objective should be achieved"
      ]
    },
    {
      "id": "IAO_0000033",
      "name": "directive information entity",
      "description": [
        "An information content entity whose concretizations indicate to their bearer how to realize them in a process."
      ],
      "editor_note": [
        "2009-03-16: provenance: a term realizable information entity was proposed for OBI (OBI_0000337) , edited by the PlanAndPlannedProcess branch. Original definition was  \"is the specification of a process that can be concretized and realized by an actor\" with alternative term  \"instruction\".It has been subsequently moved to IAO where the objective for which the original term was defined was satisfied with the definitionof this, different, term.",
        "2013-05-30 Alan Ruttenberg: What differentiates a directive information entity from an information concretization is that it can have concretizations that are either qualities or realizable entities. The concretizations that are realizable entities are created when an individual chooses to take up the direction, i.e. has the intention to (try to) realize it.",
        "8/6/2009 Alan Ruttenberg: Changed label from \"information entity about a realizable\" after discussions at ICBO",
        "Werner pushed back on calling it realizable information entity as it isn't realizable. However this name isn't right either. An example would be a recipe. The realizable entity would be a plan, but the information entity isn't about the plan, it, once concretized, *is* the plan. -Alan"
      ]
    },
    {
      "id": "IAO_0000064",
      "name": "algorithm",
      "description": [
        "A plan specification which describes the inputs and output of mathematical functions as well as workflow of execution for achieving an predefined objective. Algorithms are realized usually by means of implementation as computer programs for execution by automata."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_0000078",
      "name": "curation status specification",
      "description": [
        "The curation status of the term. The allowed values come from an enumerated list of predefined terms. See the specification of these instances for more detailed definitions of each enumerated value."
      ],
      "editor_note": [
        "Better to represent curation as a process with parts and then relate labels to that process (in IAO meeting)"
      ]
    },
    {
      "id": "IAO_0000102",
      "name": "data about an ontology part",
      "description": [
        "Data about an ontology part is a data item about a part of an ontology, for example a term"
      ],
      "editor_note": []
    },
    {
      "id": "IAO_0000225",
      "name": "obsolescence reason specification",
      "description": [
        "The reason for which a term has been deprecated. The allowed values come from an enumerated list of predefined terms. See the specification of these instances for more detailed definitions of each enumerated value."
      ],
      "editor_note": [
        "The creation of this class has been inspired in part by Werner Ceusters' paper, Applying evolutionary terminology auditing to the Gene Ontology."
      ]
    },
    {
      "id": "IAO_0000300",
      "name": "textual entity",
      "description": [
        "A textual entity is a part of a manifestation (FRBR sense), a generically dependent continuant whose concretizations are patterns of glyphs intended to be interpreted as words, formulas, etc."
      ],
      "editor_note": [
        "AR, (IAO call 2009-09-01): a document as a whole is not typically a textual entity, because it has pictures in it - rather there are parts of it that are textual entities. Examples: The title, paragraph 2 sentence 7, etc.",
        "MC, 2009-09-14 (following IAO call 2009-09-01): textual entities live at the FRBR (http://en.wikipedia.org/wiki/Functional_Requirements_for_Bibliographic_Records) manifestation level. Everything is significant: line break, pdf and html versions of same document are different textual entities."
      ]
    },
    {
      "id": "IAO_0000409",
      "name": "denotator type",
      "description": [
        "A denotator type indicates how a term should be interpreted from an ontological perspective."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_0000590",
      "name": "written name",
      "description": [
        "A textual entity that denotes a particular in reality."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000000",
      "name": "ontology module",
      "description": [],
      "editor_note": [
        "I have placed this under 'data about an ontology part', but this can be discussed. I think this is OK if 'part' is interpreted reflexively, as an ontology module is the whole ontology rather than part of it."
      ]
    },
    {
      "id": "IAO_8000001",
      "name": "base ontology module",
      "description": [
        "An ontology module that comprises only of asserted axioms local to the ontology, excludes import directives, and excludes axioms or declarations from external ontologies."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000002",
      "name": "editors ontology module",
      "description": [
        "An ontology module that is intended to be directly edited, typically managed in source control, and typically not intended for direct consumption by end-users."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000003",
      "name": "main release ontology module",
      "description": [
        "An ontology module that is intended to be the primary release product and the one consumed by the majority of tools."
      ],
      "editor_note": [
        "TODO: Add logical axioms that state that a main release ontology module is derived from (directly or indirectly) an editors module"
      ]
    },
    {
      "id": "IAO_8000004",
      "name": "bridge ontology module",
      "description": [
        "An ontology module that consists entirely of axioms that connect or bridge two distinct ontology modules. For example, the Uberon-to-ZFA bridge module."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000005",
      "name": "import ontology module",
      "description": [
        "A subset ontology module that is intended to be imported from another ontology."
      ],
      "editor_note": [
        "TODO: add axioms that indicate this is the output of a module extraction process."
      ]
    },
    {
      "id": "IAO_8000006",
      "name": "subset ontology module",
      "description": [
        "An ontology module that is extracted from a main ontology module and includes only a subset of entities or axioms."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000007",
      "name": "curation subset ontology module",
      "description": [
        "A subset ontology that is intended as a whitelist for curators using the ontology. Such a subset will exclude classes that curators should not use for curation."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000008",
      "name": "analysis subset ontology module",
      "description": [
        "An ontology module that is intended for usage in analysis or discovery applications."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000009",
      "name": "single layer subset ontology module",
      "description": [
        "A subset ontology that is largely comprised of a single layer or strata in an ontology class hierarchy. The purpose is typically for rolling up for visualization. The classes in the layer need not be disjoint."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000010",
      "name": "exclusion subset ontology module",
      "description": [
        "A subset of an ontology that is intended to be excluded for some purpose. For example, a blacklist of classes."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000011",
      "name": "external import ontology module",
      "description": [
        "An imported ontology module that is derived from an external ontology. Derivation methods include the OWLAPI SLME approach."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000012",
      "name": "species subset ontology module",
      "description": [
        "A subset ontology that is crafted to either include or exclude a taxonomic grouping of species."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000013",
      "name": "reasoned ontology module",
      "description": [
        "An ontology module that contains axioms generated by a reasoner. The generated axioms are typically direct SubClassOf axioms, but other possibilities are available."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000014",
      "name": "generated ontology module",
      "description": [
        "An ontology module that is automatically generated, for example via a SPARQL query or via template and a CSV."
      ],
      "editor_note": [
        "TODO: Add axioms (using PROV-O?) that indicate this is the output-of some reasoning process"
      ]
    },
    {
      "id": "IAO_8000015",
      "name": "template generated ontology module",
      "description": [
        "An ontology module that is automatically generated from a template specification and fillers for slots in that template."
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000016",
      "name": "taxonomic bridge ontology module",
      "description": [],
      "editor_note": []
    },
    {
      "id": "IAO_8000017",
      "name": "ontology module subsetted by expressivity",
      "description": [],
      "editor_note": []
    },
    {
      "id": "IAO_8000018",
      "name": "obo basic subset ontology module",
      "description": [
        "A subset ontology that is designed for basic applications to continue to make certain simplifying assumptions; many of these simplifying assumptions were based on the initial version of the Gene Ontology, and have become enshrined in many popular and useful tools such as term enrichment tools.\n\nExamples of such assumptions include: traversing the ontology graph ignoring relationship types using a naive algorithm will not lead to cycles (i.e. the ontology is a DAG); every referenced term is declared in the ontology (i.e. there are no dangling clauses).\n\nAn ontology is OBO Basic if and only if it has the following characteristics:\nDAG\nUnidirectional\nNo Dangling Clauses\nFully Asserted\nFully Labeled\nNo equivalence axioms\nSingly labeled edges\nNo qualifier lists\nNo disjointness axioms\nNo owl-axioms header\nNo imports"
      ],
      "editor_note": []
    },
    {
      "id": "IAO_8000019",
      "name": "ontology module subsetted by OWL profile",
      "description": [],
      "editor_note": []
    },
    {
      "id": "IAO_8000020",
      "name": "EL++ ontology module",
      "description": [],
      "editor_note": []
    },
    {
      "id": "UO_0000001",
      "name": "length unit",
      "description": [
        "A unit which is a standard measure of the distance between two points."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000002",
      "name": "mass unit",
      "description": [
        "A unit which is a standard measure of the amount of matter/energy of a physical object."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000003",
      "name": "time unit",
      "description": [
        "A unit which is a standard measure of the dimension in which events occur in sequence."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000004",
      "name": "electric current unit",
      "description": [
        "A unit which is a standard measure of the flow of electric charge."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000005",
      "name": "temperature unit",
      "description": [
        "A unit which is a standard measure of the average kinetic energy of the particles in a sample of matter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000006",
      "name": "substance unit",
      "description": [
        "A unit which is a standardised quantity of an element or compound with uniform composition."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000007",
      "name": "luminous intensity unit",
      "description": [
        "A unit which is a standard measure of the wavelength-weighted power emitted by a light source in a particular direction."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000157",
      "name": "light unit",
      "description": [
        "A unit which is a standard measure of the intensity of light."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000008",
      "name": "meter",
      "description": [
        "A length unit which is equal to the length of the path traveled by light in vacuum during a time interval of 1/299 792 458 of a second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000045",
      "name": "base unit",
      "description": [
        "A unit which is one of a particular measure to which all measures of that type can be related."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000009",
      "name": "kilogram",
      "description": [
        "A mass unit which is equal to the mass of the International Prototype Kilogram kept by the BIPM at Svres, France."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000010",
      "name": "second",
      "description": [
        "A time unit which is equal to the duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium 133 atom."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000011",
      "name": "ampere",
      "description": [
        "An electric current unit which is equal to the constant current which, if maintained in two straight parallel conductors of infinite length, of negligible circular cross-section, and placed 1 m apart in vacuum, would produce between these conductors a force equal to 2 x 10^[-7] newton per meter of length."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000012",
      "name": "kelvin",
      "description": [
        "A thermodynamic temperature unit which is equal to the fraction 1/273.16 of the thermodynamic temperature of the triple point of water."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000013",
      "name": "mole",
      "description": [
        "A substance unit which is equal to the amount of substance of a molecular system which contains as many elementary entities as there are atoms in 0.012 kilogram of carbon 12."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000014",
      "name": "candela",
      "description": [
        "A luminous intensity unit which equal to the luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency 540 x 1012 hertz and that has a radiant intensity in that direction of 1/683 watt per steradian."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000015",
      "name": "centimeter",
      "description": [
        "A length unit which is equal to one hundredth of a meter or 10^[-2] m."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000016",
      "name": "millimeter",
      "description": [
        "A length unit which is equal to one thousandth of a meter or 10^[-3] m."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000017",
      "name": "micrometer",
      "description": [
        "A length unit which is equal to one millionth of a meter or 10^[-6] m."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000018",
      "name": "nanometer",
      "description": [
        "A length unit which is equal to one thousandth of one millionth of a meter or 10^[-9] m."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000019",
      "name": "angstrom",
      "description": [
        "A length unit which is equal to 10 [-10] m."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000020",
      "name": "picometer",
      "description": [
        "A length unit which is equal to 10^[-12] m."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000021",
      "name": "gram",
      "description": [
        "A mass unit which is equal to one thousandth of a kilogram or 10^[-3] kg."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000022",
      "name": "milligram",
      "description": [
        "A mass unit which is equal to one thousandth of a gram or 10^[-3] g."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000023",
      "name": "microgram",
      "description": [
        "A mass unit which is equal to one millionth of a gram or 10^[-6] g."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000024",
      "name": "nanogram",
      "description": [
        "A mass unit which is equal to one thousandth of one millionth of a gram or 10^[-9] g."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000025",
      "name": "picogram",
      "description": [
        "A mass unit which is equal to 10^[-12] g."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000026",
      "name": "femtogram",
      "description": [
        "A mass unit which is equal to 10^[-15] g."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000027",
      "name": "degree Celsius",
      "description": [
        "A temperature unit which is equal to one kelvin degree. However, they have their zeros at different points. The centigrade scale has its zero at 273.15 K."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000028",
      "name": "millisecond",
      "description": [
        "A time unit which is equal to one thousandth of a second or 10^[-3] s."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000029",
      "name": "microsecond",
      "description": [
        "A time unit which is equal to one millionth of a second or 10^[-6] s."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000030",
      "name": "picosecond",
      "description": [
        "A time unit which is equal to 10^[-12] s."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000031",
      "name": "minute",
      "description": [
        "A time unit which is equal to 60 seconds."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000032",
      "name": "hour",
      "description": [
        "A time unit which is equal to 3600 seconds or 60 minutes."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000033",
      "name": "day",
      "description": [
        "A time unit which is equal to 24 hours."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000034",
      "name": "week",
      "description": [
        "A time unit which is equal to 7 days."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000035",
      "name": "month",
      "description": [
        "A time unit which is approximately equal to the length of time of one of cycle of the moon's phases which in science is taken to be equal to 30 days."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000036",
      "name": "year",
      "description": [
        "A time unit which is equal to 12 months which in science is taken to be equal to 365.25 days."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000037",
      "name": "milliampere",
      "description": [
        "An electric current unit current which is equal to one thousandth of an ampere or 10^[-3] A."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000038",
      "name": "microampere",
      "description": [
        "An electric current unit current which is equal to one millionth of an ampere or 10^[-6] A."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000039",
      "name": "micromole",
      "description": [
        "A substance unit equal to a millionth of a mol or 10^[-6] mol."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000040",
      "name": "millimole",
      "description": [
        "A substance unit equal to a thousandth of a mol or 10^[-3] mol."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000041",
      "name": "nanomole",
      "description": [
        "A substance unit equal to one thousandth of one millionth of a mole or 10^[-9] mol."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000042",
      "name": "picomole",
      "description": [
        "A substance unit equal to 10^[-12] mol."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000043",
      "name": "femtomole",
      "description": [
        "A substance unit equal to 10^[-15] mol."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000044",
      "name": "attomole",
      "description": [
        "A substance unit equal to 10^[-18] mol."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000046",
      "name": "prefix",
      "description": [],
      "editor_note": []
    },
    {
      "id": "UO_0000047",
      "name": "area unit",
      "description": [
        "A unit which is a standard measure of the amount of a 2-dimensional flat surface."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000048",
      "name": "acceleration unit",
      "description": [
        "A unit which is a standard measure of the rate of change of velocity in either speed or direction."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000049",
      "name": "angular velocity unit",
      "description": [
        "A unit which is a standard measure of the rate of angular movement about an axis; the angle rotated in a given time."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000050",
      "name": "angular acceleration unit",
      "description": [
        "A unit which is a standard measure of the rate of change of angular velocity."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000051",
      "name": "concentration unit",
      "description": [
        "A unit which represents a standard measurement of how much of a given substance there is mixed with another substance."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000052",
      "name": "mass density unit",
      "description": [
        "A density unit which is a standard measure of the mass of a substance in a given volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000182",
      "name": "density unit",
      "description": [
        "A unit which is a standard measure of the influence exerted by some mass."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000053",
      "name": "luminance unit",
      "description": [
        "A unit which is a standard measure of the luminous intensity impinging on a given area."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000054",
      "name": "area density unit",
      "description": [
        "A density unit which is a standard measure of the mass exerting an influence on a given area."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000055",
      "name": "molar mass unit",
      "description": [
        "A unit which is a standard measure of the mass of a homogeneous substance containing 6.02 x 1023 atoms or molecules."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000056",
      "name": "molar volume unit",
      "description": [
        "A unit which is a standard measure of the volume of a homogeneous substance containing 6.02 x 1023 atoms or molecules."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000095",
      "name": "volume unit",
      "description": [
        "A unit which is a standard measure of the amount of space occupied by any substance, whether solid, liquid, or gas."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000057",
      "name": "momentum unit",
      "description": [
        "A unit which is a standard measure of the quantity of motion measured by the product of mass and velocity."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000058",
      "name": "rotational frequency unit",
      "description": [
        "A unit which is a standard measure of the number of rotations in a given time."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000105",
      "name": "frequency unit",
      "description": [
        "A unit which is a standard measure of the number of repetitive actions in a particular time."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000059",
      "name": "specific volume unit",
      "description": [
        "A unit which is a standard measure of the volume of a given mass of substance (the reciprocal of density)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000060",
      "name": "speed/velocity unit",
      "description": [
        "A unit which is a standard measure of the rate of movement. Speed is measured in the same physical units of measurement as velocity, but does not contain the element of direction that velocity has. Speed is thus the magnitude component of velocity."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000061",
      "name": "unit of molarity",
      "description": [
        "A concentration unit which is a standard measure of the number of moles of a given substance per liter of solution."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000062",
      "name": "molar",
      "description": [
        "A unit of concentration which expresses a concentration of 1 mole of solute per liter of solution (mol/L)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000063",
      "name": "millimolar",
      "description": [
        "A unit of molarity which is equal to one thousandth of a molar or 10^[-3] M."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000064",
      "name": "micromolar",
      "description": [
        "A unit of molarity which is equal to one millionth of a molar or 10^[-6] M."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000065",
      "name": "nanomolar",
      "description": [
        "A unit of molarity which is equal to one thousandth of one millionth of a molar or 10^[-9] M."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000066",
      "name": "picomolar",
      "description": [
        "A unit of molarity which is equal to 10^[-12] M."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000067",
      "name": "unit of molality",
      "description": [
        "A concentration unit which is a standard measure of the number of moles of a given substance per kilogram of solvent."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000068",
      "name": "molal",
      "description": [
        "A unit of concentration which expresses a concentration of a solution of 1 mole per kilogram of solvent (mol/kg)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000069",
      "name": "millimolal",
      "description": [
        "A molality unit which is equal to one thousandth of a molal or 10^[-3] m."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000070",
      "name": "micromolal",
      "description": [
        "A molality unit which is equal to one millionth of a molal or 10^[-6] m."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000071",
      "name": "nanomolal",
      "description": [
        "A molality unit which is equal to one thousandth of one millionth of a molal or 10^[-9] m."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000072",
      "name": "picomolal",
      "description": [
        "A molality unit which is equal to 10^[-12] m."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000073",
      "name": "femtomolar",
      "description": [
        "A unit of molarity which is equal to 10^[-15] M."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000074",
      "name": "unit of normality",
      "description": [
        "A unit of concentration which highlights the chemical nature of salts."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000075",
      "name": "normal",
      "description": [
        "A unit of concentration which is one gram equivalent of a solute per liter of solution. A gram equivalent weight or equivalent is a measure of the reactive capacity of a given molecule."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000076",
      "name": "mole fraction",
      "description": [
        "A concentration unit which denotes the number of moles of solute as a proportion of the total number of moles in a solution."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000191",
      "name": "fraction",
      "description": [
        "A dimensionless ratio unit which relates the part (the numerator) to the whole (the denominator)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000077",
      "name": "meter per second per second",
      "description": [
        "An acceleration unit which is equal to the acceleration an object changing its velocity by 1meter/s over a time period that equals one second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000078",
      "name": "radian per second per second",
      "description": [
        "An angular unit acceleration which is equal to the angular acceleration of an object changing its angular velocity by 1rad/s over a time period that equals one second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000079",
      "name": "radian per second",
      "description": [
        "An angular unit velocity which is equal to about 9.54930 rpm (revolutions per minute)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000080",
      "name": "square meter",
      "description": [
        "An area unit which is equal to an area enclosed by a square with sides each 1 meter long."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000081",
      "name": "square centimeter",
      "description": [
        "An area unit which is equal to one ten thousandth of a square meter or 10^[-4] m^[2]."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000082",
      "name": "square millimeter",
      "description": [
        "An area unit which is equal to one millionth of a square meter or 10^[-6] m^[2]."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000083",
      "name": "kilogram per cubic meter",
      "description": [
        "A mass unit density which is equal to mass of an object in kilograms divided by the volume in cubic meters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000084",
      "name": "gram per cubic centimeter",
      "description": [
        "A mass unit density which is equal to mass of an object in grams divided by the volume in cubic centimeters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000085",
      "name": "candela per square meter",
      "description": [
        "A luminance unit which is equal to a luminous intensity of one candela radiating from a surface whose area is one square meter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000086",
      "name": "kilogram per square meter",
      "description": [
        "An area density unit which is equal to the mass of an object in kilograms divided by the surface area in meters squared."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000087",
      "name": "kilogram per mole",
      "description": [
        "A molar mass unit which is equal to one kilogram of mass of one mole of chemical element or chemical compound."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000088",
      "name": "gram per mole",
      "description": [
        "A molar mass unit which is equal to one gram of mass of one mole of chemical element or chemical compound."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000089",
      "name": "cubic meter per mole",
      "description": [
        "A molar volume unit which is equal to 1 cubic meter occupied by one mole of a substance in the form of a solid, liquid, or gas."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000090",
      "name": "cubic centimeter per mole",
      "description": [
        "A molar volume unit which is equal to 1 cubic centimeter occupied by one mole of a substance in the form of a solid, liquid, or gas."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000091",
      "name": "kilogram meter per second",
      "description": [
        "A momentum unit which is equal to the momentum of a one kilogram mass object with a speed of one meter per second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000092",
      "name": "turns per second",
      "description": [
        "A rotational frequency unit which is equal to the number complete turn in a period of time that equals to 1 second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000093",
      "name": "cubic meter per kilogram",
      "description": [
        "A specific volume unit which is equal to one cubic meter volume occupied by one kilogram of a particular substance."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000094",
      "name": "meter per second",
      "description": [
        "A speed/velocity unit which is equal to the speed of an object traveling 1 meter distance in one second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000096",
      "name": "cubic meter",
      "description": [
        "A volume unit which is equal to the volume of a cube with edges one meter in length. One cubic meter equals to 1000 liters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000097",
      "name": "cubic centimeter",
      "description": [
        "A volume unit which is equal to one millionth of a cubic meter or 10^[-9] m^[3], or to 1 ml."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000098",
      "name": "milliliter",
      "description": [
        "A volume unit which is equal to one thousandth of a liter or 10^[-3] L, or to 1 cubic centimeter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000099",
      "name": "liter",
      "description": [
        "A volume unit which is equal to one thousandth of a cubic meter or 10^[-3] m^[3], or to 1 decimeter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000100",
      "name": "cubic decimeter",
      "description": [
        "A volume unit which is equal to one thousand of a cubic meter or 10^[-3] m^[3], or to 1 L."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000101",
      "name": "microliter",
      "description": [
        "A volume unit which is equal to one millionth of a liter or 10^[-6] L."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000102",
      "name": "nanoliter",
      "description": [
        "A volume unit which is equal to one thousandth of one millionth of a liter or 10^[-9] L."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000103",
      "name": "picoliter",
      "description": [
        "A volume unit which is equal to 10^[-12] L."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000104",
      "name": "femtoliter",
      "description": [
        "A volume unit which is equal to 10^[-15] L."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000106",
      "name": "hertz",
      "description": [
        "A frequency unit which is equal to 1 complete cycle of a recurring phenomenon in 1 second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000107",
      "name": "force unit",
      "description": [
        "A unit which is a standard measure of the force is applied when a mass is accelerated."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000108",
      "name": "newton",
      "description": [
        "A force unit which is equal to the force required to cause an acceleration of 1m/s2 of a mass of 1 Kg in the direction of the force."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000109",
      "name": "pressure unit",
      "description": [
        "A unit which is a standard measure of the force applied to a given area."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000110",
      "name": "pascal",
      "description": [
        "A pressure unit which is equal to the pressure or stress on a surface caused by a force of 1 newton spread over a surface of 1 m^[2]."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000112",
      "name": "joule",
      "description": [
        "An energy unit which is equal to the energy required when a force of 1 newton moves an object 1 meter in the direction of the force."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000113",
      "name": "power unit",
      "description": [
        "A unit which is a standard measure power or the rate of doing work."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000114",
      "name": "watt",
      "description": [
        "A power unit which is equal to the power used when work is done at the rate of 1 joule per second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000115",
      "name": "illuminance unit",
      "description": [
        "A unit which is a standard measure of the luminous flux incident on a unit area."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000116",
      "name": "lux",
      "description": [
        "An illuminance unit which is equal to the illuminance produced by 1 lumen evenly spread over an area 1 m^[2]."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000117",
      "name": "luminous flux unit",
      "description": [
        "A unit which is a standard measure of the flow of radiant energy."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000118",
      "name": "lumen",
      "description": [
        "A luminous flux unit which is equal to the luminous flux emitted into 1 steradian by a point source of 1 candela."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000119",
      "name": "catalytic activity unit",
      "description": [
        "A unit which is a standard measure of the amount of the action of a catalyst."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000120",
      "name": "katal",
      "description": [
        "A catalytic unit activity which is equal to the activity of a catalyst in moles per second, such as the amount of an enzyme needed to transform one mole of substrate per second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000121",
      "name": "angle unit",
      "description": [
        "A unit which is a standard measure of the figure or space formed by the junction of two lines or planes."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000122",
      "name": "plane angle unit",
      "description": [
        "A unit which is a standard measure of the angle formed by two straight lines in the same plane."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000123",
      "name": "radian",
      "description": [
        "A plane angle unit which is equal to the angle subtended at the center of a circle by an arc equal in length to the radius of the circle, approximately 57 degrees 17 minutes and 44.6 seconds."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000124",
      "name": "solid angle unit",
      "description": [
        "A unit which is a standard measure of the angle formed by three or more planes intersecting at a common point."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000125",
      "name": "steradian",
      "description": [
        "A solid angle unit which is equal to the solid angle subtended at the center of a sphere by an area on the surface of the sphere that is equal to the radius squared."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000127",
      "name": "radiation unit",
      "description": [
        "A unit which is a standard measure of the amount of radiation emitted by a given radiation source as well as the amount of radiation absorbed or deposited in a specific material by a radiation source."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000128",
      "name": "activity (of a radionuclide) unit",
      "description": [
        "A unit which is a standard measure of the transformation (disintegration) rate of a radioactive substance."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000129",
      "name": "absorbed dose unit",
      "description": [
        "A unit which is a standard measure of the energy imparted by ionizing radiation to unit mass of matter such as tissue."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000130",
      "name": "dose equivalent unit",
      "description": [
        "A unit which is a standard measure of the expression of dose in terms of its biological effect."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000131",
      "name": "exposure unit",
      "description": [
        "A unit which is a standard measure of the quantity that expresses the ability of radiation to ionize air and thereby create electric charges which can be collected and measured."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000132",
      "name": "becquerel",
      "description": [
        "An activity (of a radionuclide) unit which is equal to the activity of a quantity of radioactive material in which one nucleus decays per second or there is one atom disintegration per second (dps)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000133",
      "name": "curie",
      "description": [
        "An activity (of a radionuclide) unit which is equal to the activity of a quantity of radioactive material in which there are 3.7 x 10^[10] atom disintegration per second (dps)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000134",
      "name": "gray",
      "description": [
        "An absorbed dose unit which is equal to the absorption of one joule of radiation energy by one kilogram of matter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000135",
      "name": "rad",
      "description": [
        "An absorbed dose unit which is equal to 0.01 gray (Gy)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000136",
      "name": "roentgen",
      "description": [
        "An exposure unit which is equal to the amount of radiation required to liberate positive and negative charges of one electrostatic unit of charge in 1 cm^[3] of air at standard temperature and pressure (STP). This corresponds to the generation of approximately 2.0810^[9] ion pairs."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000137",
      "name": "sievert",
      "description": [
        "A dose equivalent unit which is equal to the absorption of one joule of radiation energy by one kilogram of matter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000138",
      "name": "millisievert",
      "description": [
        "A dose equivalent unit which is equal to one thousandth of a sievert or 10^[-3] Sv."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000139",
      "name": "microsievert",
      "description": [
        "A dose equivalent unit which is equal to one millionth of a sievert or 10^[-6] Sv."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000140",
      "name": "Roentgen equivalent man",
      "description": [
        "A dose equivalent unit which when multiplied by hundred is equal to one sievert or 1 Sv. 1 Sv is equal to 100 rem."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000141",
      "name": "microgray",
      "description": [
        "An absorbed dose unit which is equal to one millionth of a gray or 10^[-6] Gy."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000142",
      "name": "milligray",
      "description": [
        "An absorbed dose unit which is equal to one thousandth of a gray or 10^[-3] Gy."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000143",
      "name": "nanogray",
      "description": [
        "An absorbed dose unit which is equal to one thousandth of a millionth of a gray or 10^[-9] Gy."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000144",
      "name": "nanosievert",
      "description": [
        "A dose equivalent unit which is equal to one thousandth of a millionth of a sievert or 10^[-9] Sv."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000145",
      "name": "millicurie",
      "description": [
        "An activity (of a radionuclide) unit which is equal to one thousandth of a curie or 10^[-3] Ci."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000146",
      "name": "microcurie",
      "description": [
        "An activity (of a radionuclide) unit which is equal to one millionth of a curie or 10^[-6] Ci."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000147",
      "name": "disintegrations per minute",
      "description": [
        "An activity (of a radionuclide) unit which is equal to the activity of a quantity of radioactive material in which one nucleus decays per minute or there is one atom disintegration per minute."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000148",
      "name": "counts per minute",
      "description": [
        "An activity (of a radionuclide) unit which is equal to the number of light emissions produced by ionizing radiation in one minute."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000150",
      "name": "nanosecond",
      "description": [
        "A time unit which is equal to one thousandth of one millionth of a second or 10^[-9] s."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000151",
      "name": "century",
      "description": [
        "A time unit which is equal to 100 years."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000152",
      "name": "half life",
      "description": [
        "A time unit which represents the period over which the activity or concentration of a specified chemical or element falls to half its original activity or concentration."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000153",
      "name": "foot candle",
      "description": [
        "An illuminance unit which is equal to the illuminance produced by 1 lumen evenly spread over an area 1 foot^[2]. One footcandle is equal to 10.76 lux."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000154",
      "name": "irradiance unit",
      "description": [
        "A unit which is a standard measure of the power of electromagnetic radiation at a surface, per unit area."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000155",
      "name": "watt per square meter",
      "description": [
        "An irradiance unit which is equal to 1 watt of radiant power incident per one square meter surface area."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000156",
      "name": "einstein per square meter per second",
      "description": [
        "An irradiance unit which is equal to one einstein per square meter per second. One einstein is one mole of photons, regardless of their frequency. Therefore, the number of photons in an einstein is Avogadro's number."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000158",
      "name": "watt per steradian per square meter",
      "description": [
        "A radiance unit which is equal to one watt of radiant power incident per steradian solid angle per one square meter projected area of the source, as viewed from the given direction."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000161",
      "name": "radiance unit",
      "description": [
        "A unit which is a standard measure of the power of electromagnetic radiation through space or through a material medium in the form of electromagnetic waves."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000159",
      "name": "radiant intensity unit",
      "description": [
        "A unit which is a standard measure of the intensity of electromagnetic radiation."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000160",
      "name": "microeinstein per square meter per second",
      "description": [
        "An irradiance unit which is equal to one microeinstein per square meter per second or 10^[-6] microeinstein/sm^[2]."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000162",
      "name": "watt per steradian",
      "description": [
        "A radiant intensity unit which is equal to one kilogram meter squared per second cubed per steradian."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000163",
      "name": "mass percentage",
      "description": [
        "A dimensionless concentration unit which denotes the mass of a substance in a mixture as a percentage of the mass of the entire mixture."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000187",
      "name": "percent",
      "description": [
        "A dimensionless ratio unit which denotes numbers as fractions of 100."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000164",
      "name": "mass volume percentage",
      "description": [
        "A dimensionless concentration unit which denotes the mass of the substance in a mixture as a percentage of the volume of the entire mixture."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000165",
      "name": "volume percentage",
      "description": [
        "A dimensionless concentration unit which denotes the volume of the solute in mL per 100 mL of the resulting solution."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000205",
      "name": "volume per unit volume",
      "description": [
        "A dimensionless concentration unit which denotes the given volume of the solute in the total volume of the resulting solution."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000166",
      "name": "parts per notation unit",
      "description": [
        "A dimensionless concentration notation which describes the amount of one substance in another. It is the ratio of the amount of the substance of interest to the amount of that substance plus the amount of the substance."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000186",
      "name": "dimensionless unit",
      "description": [
        "A unit which is a standard measure of physical quantity consisting of only a numerical number without any units."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000167",
      "name": "parts per hundred",
      "description": [
        "A dimensionless concentration notation which denotes the amount of a given substance in a total amount of 100 regardless of the units of measure as long as they are the same."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000168",
      "name": "parts per thousand",
      "description": [
        "A dimensionless concentration notation which denotes the amount of a given substance in a total amount of 1000 regardless of the units of measure as long as they are the same."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000169",
      "name": "parts per million",
      "description": [
        "A dimensionless concentration notation which denotes the amount of a given substance in a total amount of 1,000,000 regardless of the units of measure used as long as they are the same or 1 part in 10^[6]."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000170",
      "name": "parts per billion",
      "description": [
        "A dimensionless concentration notation which denotes the amount of a given substance in a total amount of 1,000,000,000 regardless of the units of measure as long as they are the same or 1 part in 10^[9]."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000171",
      "name": "parts per trillion",
      "description": [
        "A dimensionless concentration notation which denotes the amount of a given substance in a total amount of 1,000,000,000 regardless of the units of measure used as long as they are the same or 1 part in 10^[12]."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000172",
      "name": "parts per quadrillion",
      "description": [
        "A dimensionless concentration notation which denotes the amount of a given substance in a total amount of 1,000,000,000,000 regardless of the units of measure used as long as they are the same or 1 part in 10^[15]."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000173",
      "name": "gram per milliliter",
      "description": [
        "A mass unit density which is equal to mass of an object in grams divided by the volume in milliliter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000174",
      "name": "kilogram per liter",
      "description": [
        "A mass unit density which is equal to mass of an object in kilograms divided by the volume in liters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000175",
      "name": "gram per liter",
      "description": [
        "A mass unit density which is equal to mass of an object in grams divided by the volume in liters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000176",
      "name": "milligram per milliliter",
      "description": [
        "A mass unit density which is equal to mass of an object in milligrams divided by the volume in milliliters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000177",
      "name": "unit per volume unit",
      "description": [
        "A concentration unit which is a standard measure of the number of units, as an agreed arbitrary amount, of a given substance per a specific volume of solution."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000178",
      "name": "unit per milliliter",
      "description": [
        "A unit per milliliter unit which is equal to one unit of an agreed arbitrary amount per one milliliter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000179",
      "name": "unit per liter",
      "description": [
        "A unit per milliliter unit which is equal to one unit of an agreed arbitrary amount per one liter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000180",
      "name": "mass per unit volume",
      "description": [
        "A concentration unit which is a standard measure of the mass of a substance in a given volume (density)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000181",
      "name": "enzyme unit",
      "description": [
        "A catalytic unit activity which is equal to the amount of the enzyme that catalyzes the conversion of 1 micro mole of substrate per minute."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000183",
      "name": "linear density unit",
      "description": [
        "A density unit which is a standard measure of the mass exerting an influence on a one-dimensional object."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000184",
      "name": "kilogram per meter",
      "description": [
        "An area density unit which is equal to the mass of an object in kilograms divided by one meter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000185",
      "name": "degree",
      "description": [
        "A plane angle unit which is equal to 1/360 of a full rotation or 1.7453310^[-2] rad."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000190",
      "name": "ratio",
      "description": [
        "A dimensionless unit which denotes an amount or magnitude of one quantity relative to another."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000188",
      "name": "pi",
      "description": [
        "A dimensionless unit which denoted an irrational real number, approximately equal to 3.14159 which is the ratio of a circle's circumference to its diameter in Euclidean geometry."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000189",
      "name": "count unit",
      "description": [
        "A dimensionless unit which denotes a simple count of things."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000192",
      "name": "molecule count",
      "description": [
        "A dimensionless count unit which denotes the number of molecules."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000193",
      "name": "purity percentage",
      "description": [
        "A dimensionless percent unit which denotes the homogeneity of a biomaterial."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000194",
      "name": "confluence percentage",
      "description": [
        "A dimensionless percent unit which denotes the density of an attached or monolayer culture (e.g., cell culture)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000195",
      "name": "degree Fahrenheit",
      "description": [
        "A temperature unit which is equal to 5/9ths of a kelvin. Negative 40 degrees Fahrenheit is equal to negative 40 degrees Celsius."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000196",
      "name": "pH",
      "description": [
        "A dimensionless concentration notation which denotes the acidity of a solution in terms of activity of hydrogen ions (H+)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000197",
      "name": "liter per kilogram",
      "description": [
        "A specific volume unit which is equal to one liter volume occupied by one kilogram of a particular substance."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000198",
      "name": "milliliter per kilogram",
      "description": [
        "A specific volume unit which is equal to a thousandth of a liter per kilogram or 10^[-3] l/kg."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000199",
      "name": "microliter per kilogram",
      "description": [
        "A specific volume unit which is equal to one millionth of a liter per kilogram or 10^[-6] l/kg."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000200",
      "name": "cell concentration unit",
      "description": [
        "A concentration unit which denotes the average cell number in a given volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000201",
      "name": "cells per milliliter",
      "description": [
        "A unit of cell concentration which is equal to one cell in a volume of 1 milliliter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000202",
      "name": "catalytic (activity) concentration unit",
      "description": [
        "A concentration unit which is a standard measure of the amount of the action of a catalyst in a given volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000203",
      "name": "katal per cubic meter",
      "description": [
        "A catalytic (activity) concentration unit which is equal to 1 katal activity of a catalyst in a given volume of one cubic meter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000204",
      "name": "katal per liter",
      "description": [
        "A catalytic (activity) concentration unit which is equal to 1 katal activity of a catalyst in a given volume of one thousandth of a cubic meter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000206",
      "name": "milliliter per cubic meter",
      "description": [
        "A volume per unit volume unit which is equal to one millionth of a liter of solute in one cubic meter of solution."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000207",
      "name": "milliliter per liter",
      "description": [
        "A volume per unit volume unit which is equal to one millionth of a liter of solute in one liter of solution."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000208",
      "name": "gram per deciliter",
      "description": [
        "A mass density unit which is equal to mass of an object in grams divided by the volume in deciliters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000209",
      "name": "deciliter",
      "description": [
        "A volume unit which is equal to one tenth of a liter or 10^[-1] L."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000210",
      "name": "colony forming unit",
      "description": [
        "A dimensionless count unit which a measure of viable bacterial numbers."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000211",
      "name": "plaque forming unit",
      "description": [
        "A dimensionless count unit which a measure of plague forming units in a given volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000212",
      "name": "colony forming unit per volume",
      "description": [
        "A concentration unit which a measure of viable bacterial numbers in a given volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000213",
      "name": "colony forming unit per milliliter",
      "description": [
        "A colony forming unit which a measure of viable bacterial numbers in one milliliter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000214",
      "name": "plaque forming unit per volume",
      "description": [
        "A concentration unit which a measure of plague forming units in a given volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000215",
      "name": "plaque forming unit per milliliter",
      "description": [
        "A concentration unit which a measure of plague forming units in one milliliter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000216",
      "name": "disintegrations per second",
      "description": [
        "An activity (of a radionuclide) unit which is equal to the activity of a quantity of radioactive material in which one nucleus decays per second or there is one atom disintegration per second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000217",
      "name": "electric potential difference unit",
      "description": [
        "A unit which is a standard measure of the work done per unit charge as a charge is moved between two points in an electric field."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000218",
      "name": "volt",
      "description": [
        "An electric potential difference unit which is equal to the work per unit charge. One volt is the potential difference required to move one coulomb of charge between two points in a circuit while using one joule of energy."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000219",
      "name": "electric charge",
      "description": [
        "A unit which is a standard measure of the quantity of unbalanced electricity in a body (either positive or negative) and construed as an excess or deficiency of electrons."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000220",
      "name": "coulomb",
      "description": [
        "An electrical charge unit which is equal to the amount of charge transferred by a current of 1 ampere in 1 second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000221",
      "name": "dalton",
      "description": [
        "An independently to the base SI units defined mass unit which is equal to one twelfth of the mass of an unbound atom of the carbon-12 nuclide, at rest and in its ground state."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000222",
      "name": "kilodalton",
      "description": [
        "A mass unit which is equal to one thousand daltons."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000223",
      "name": "watt-hour",
      "description": [
        "An energy unit which is equal to the amount of electrical energy equivalent to a one-watt load drawing power for one hour."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000224",
      "name": "kilowatt-hour",
      "description": [
        "An energy unit which is equal to 1,000 watt-hours."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000225",
      "name": "magnetic flux unit",
      "description": [
        "A unit which is a standard measure of quantity of magnetism, taking account of the strength and the extent of a magnetic field."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000226",
      "name": "weber",
      "description": [
        "A magnetic flux unit which is equal to the amount of flux that when linked with a single turn of wire for an interval of one second will induce an electromotive force of one volt."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000227",
      "name": "magnetic flux density unit",
      "description": [
        "A unit which is a standard measure of the strength of a magnetic field."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000228",
      "name": "tesla",
      "description": [
        "A magnetic flux density unit which is equal to one weber per square meter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000229",
      "name": "volt-hour",
      "description": [
        "A magnetic flux unit which is equal to 3600 Wb."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000230",
      "name": "kilovolt-hour",
      "description": [
        "A magnetic flux unit which is equal to one thousand volt-hours."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000231",
      "name": "information unit",
      "description": [
        "A unit which is a standard measure of the amount of information."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000232",
      "name": "bit",
      "description": [
        "An information unit which refers to a digit in the binary numeral system, which consists of base 2 digits (ie there are only 2 possible values: 0 or 1)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000233",
      "name": "byte",
      "description": [
        "An information unit which is equal to 8 bits."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000234",
      "name": "kilobyte",
      "description": [
        "An information unit which is equal to 1000 bytes."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000235",
      "name": "megabyte",
      "description": [
        "An information unit which is equal to 1000 kB."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000236",
      "name": "image resolution unit",
      "description": [
        "An information unit which is a standard measure of the detail an image holds."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000237",
      "name": "chroma sampling unit",
      "description": [
        "An image resolution unit which is a standard measure of the amount of spatial detail in an image."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000238",
      "name": "dynamic range unit",
      "description": [
        "An image resolution unit which is a standard measure of the amount of contrast available in a pixel."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000239",
      "name": "spatial resolution unit",
      "description": [
        "An image resolution unit which is a standard measure of the way luminance and chrominance may be sampled at different levels."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000240",
      "name": "dots per inch",
      "description": [
        "A spatial resolution unit which is a standard measure of the printing resolution, in particular the number of individual dots of ink a printer or toner can produce within a linear one-inch space."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000241",
      "name": "micron pixel",
      "description": [
        "A spatial resolution unit which is equal to a pixel size of one micrometer."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000242",
      "name": "pixels per inch",
      "description": [
        "A spatial resolution unit which is a standard measure of the resolution of a computer display, related to the size of the display in inches and the total number of pixels in the horizontal and vertical directions."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000243",
      "name": "pixels per millimeter",
      "description": [
        "A spatial resolution unit which is a standard measure of the number of pixels in one millimeter length or width of a digital image divided by the physical length or width of a printed image."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000244",
      "name": "base pair",
      "description": [
        "A count unit which contains one nucleotide."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000245",
      "name": "kibibyte",
      "description": [
        "An information unit which is equal to 1024 B."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000246",
      "name": "mebibyte",
      "description": [
        "An information unit which is equal to 1024 KiB."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000247",
      "name": "millivolt",
      "description": [
        "An electric potential difference unit which is equal to one thousandth of a volt or 10^[-3] V."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000248",
      "name": "kilovolt",
      "description": [
        "An electric potential difference unit which is equal to one thousand volts or 10^[3] V."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000249",
      "name": "microvolt",
      "description": [
        "An electric potential difference unit which is equal to one millionth of a volt or 10^[-6] V."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000250",
      "name": "nanovolt",
      "description": [
        "An electric potential difference unit which is equal to one billionth of a volt or 10^[-12] V."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000251",
      "name": "picovolt",
      "description": [
        "An electric potential difference unit which is equal to one trillionth of a volt or 10^[-12] V."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000252",
      "name": "megavolt",
      "description": [
        "An electric potential difference unit which is equal to one million volts or 10^[6] V."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000253",
      "name": "surface tension unit",
      "description": [
        "A unit which is a standard measure of the ability of a liguid to attraction of molecules at its surface as a result of unbalanced molecular cohesive forces."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000254",
      "name": "newton per meter",
      "description": [
        "A surface tension unit which is equal to one newton per meter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000255",
      "name": "dyne per cm",
      "description": [
        "A surface tension unit which is equal to one dyne per centimeter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000256",
      "name": "viscosity unit",
      "description": [
        "A unit which is a standard measure of the internal resistance of fluids to flow."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000257",
      "name": "pascal second",
      "description": [
        "A viscosity unit which is equal to one pascale per second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000258",
      "name": "poise",
      "description": [
        "A viscosity unit which is equal to one dyne second per square centimeter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000259",
      "name": "decibel",
      "description": [
        "A ratio unit which is an indicator of sound power per unit area."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000260",
      "name": "effective dose unit",
      "description": [
        "A unit which is a standard measure of the estimate of the stochastic effect that a non-uniform radiation dose has on a human."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000261",
      "name": "conduction unit",
      "description": [
        "A unit which represents a standard measurement of the transmission of an entity through a medium."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000262",
      "name": "electrical conduction unit",
      "description": [
        "A unit which represents a standard measurement of the movement of electrically charged particles through a transmission medium (electrical conductor)."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000263",
      "name": "heat conduction unit",
      "description": [
        "A unit which represents a standard measurement of the spontaneous transfer of thermal energy through matter, from a region of higher temperature to a region of lower temperature."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000264",
      "name": "siemens",
      "description": [
        "An electrical conduction unit which is equal to A/V."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000265",
      "name": "watt per meter kelvin",
      "description": [
        "An heat conduction unit which is equal to one watt divided by meter kelvin."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000266",
      "name": "electronvolt",
      "description": [
        "A non-SI unit of energy (eV) defined as the energy acquired by a single unbound electron when it passes through an electrostatic potential difference of one volt. An electronvolt is equal to 1.602 176 53(14) x 10^-19 J."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000267",
      "name": "electric field strength unit",
      "description": [
        "The electric field strength is a unit which is a measure of the potential difference between two points some distance apart."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000268",
      "name": "volt per meter",
      "description": [
        "The volt per meter is a unit of electric field strength equal to the a potential difference of 1 volt existing between two points that are 1 meter apart."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000269",
      "name": "absorbance unit",
      "description": [
        "A dimensionless logarithmic unit assigned to a measure of absorbance of light through a partially absorbing substance, defined as -log10(I/I_0) where I = transmitted light and I_0 = incident light."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000270",
      "name": "volumetric flow rate unit",
      "description": [
        "A unit which is a standard measure of the volume of fluid which passes through a given surface per unit time ."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000271",
      "name": "microliters per minute",
      "description": [
        "A volumetric flow rate unit which is equal to one microliter volume through a given surface in one minute."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000272",
      "name": "millimetres of mercury",
      "description": [
        "A unit of pressure equal to the amount of fluid pressure one millimeter deep in mercury at zero degrees centigrade on Earth."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000273",
      "name": "milligram per liter",
      "description": [
        "A mass unit density which is equal to mass of an object in milligrams divided by the volume in liters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000274",
      "name": "microgram per milliliter",
      "description": [
        "A mass unit density which is equal to mass of an object in micrograms divided by the volume in millliters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000275",
      "name": "nanogram per milliliter",
      "description": [
        "A mass unit density which is equal to mass of an object in nanograms divided by the volume in milliliters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000276",
      "name": "amount per container",
      "description": [
        "A concentration unit which is a standard measure of the amount of a substance in a given container."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000277",
      "name": "ug/disk",
      "description": [
        "A unit which is equal to one microgram per disk, where a disk is some physical surface/container upon which the substance is deposited."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000278",
      "name": "nmole/disk",
      "description": [
        "A unit which is equal to one nanomole per disk, where a disk is some physical surface/container upon which the substance is deposited."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000279",
      "name": "milliunits per milliliter",
      "description": [
        "A unit per milliliter unit which is equal to one thousandth of a unit of an agreed arbitrary amount per one milliliter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000280",
      "name": "rate unit",
      "description": [
        "A unit which represents a standard measurement occurrence of a process per unit time."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000281",
      "name": "count per nanomolar second",
      "description": [
        "A rate unit which is equal to one over one nanomolar second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000282",
      "name": "count per molar second",
      "description": [
        "A rate unit which is equal to one over one molar second."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000283",
      "name": "kilogram per hectare",
      "description": [
        "An area density unit which is equal to the mass of an object in kilograms divided by the surface area in hectares."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000284",
      "name": "count per nanomolar",
      "description": [
        "A rate unit which is equal to one over one nanomolar."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000285",
      "name": "count per molar",
      "description": [
        "A rate unit which is equal to one over one molar."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000286",
      "name": "yotta",
      "description": [
        "A prefix in the metric system denoting a factor of ten to the power of 24."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000287",
      "name": "hecto",
      "description": [
        "A prefix in the metric system denoting a factor of one hundred."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000288",
      "name": "zetta",
      "description": [
        "A prefix in the metric system denoting a factor of ten to the power of 21."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000289",
      "name": "exa",
      "description": [
        "A prefix in the metric system denoting a factor of ten to the power of 18."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000290",
      "name": "peta",
      "description": [
        "A prefix in the metric system denoting a factor of ten to the power of 15."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000291",
      "name": "tera",
      "description": [
        "A prefix in the metric system denoting a factor of ten to the power of 12."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000292",
      "name": "giga",
      "description": [
        "A prefix in the metric system denoting a factor of ten to the power of 9."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000293",
      "name": "mega",
      "description": [
        "A prefix in the metric system denoting a factor of million."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000294",
      "name": "kilo",
      "description": [
        "A prefix in the metric system denoting a factor of one thousand."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000295",
      "name": "deca",
      "description": [
        "A prefix in the metric system denoting a factor of ten."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000296",
      "name": "deci",
      "description": [
        "A prefix in the metric system denoting a factor of one tenth."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000297",
      "name": "milli",
      "description": [
        "A prefix in the metric system denoting a factor of one thousand."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000298",
      "name": "centi",
      "description": [
        "A prefix in the metric system denoting a factor of one hundred."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000299",
      "name": "micro",
      "description": [
        "A prefix in the metric system denoting a factor of 10 to the power of -6."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000300",
      "name": "nano",
      "description": [
        "A prefix in the metric system denoting a factor of 10 to the power of -9."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000301",
      "name": "microgram per liter",
      "description": [
        "A mass unit density which is equal to mass of an object in micrograms divided by the volume in liters."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000302",
      "name": "pico",
      "description": [
        "A prefix in the metric system denoting a factor of 10 to the power of -12."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000303",
      "name": "femto",
      "description": [
        "A prefix in the metric system denoting a factor of 10 to the power of -15."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000304",
      "name": "atto",
      "description": [
        "A prefix in the metric system denoting a factor of 10 to the power of -18."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000305",
      "name": "zepto",
      "description": [
        "A prefix in the metric system denoting a factor of 10 to the power of -21."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000306",
      "name": "yocto",
      "description": [
        "A prefix in the metric system denoting a factor of 10 to the power of -24."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000307",
      "name": "dose unit",
      "description": [
        "A concentration unit which is a standard measure of the amount of a toxic or pharmaceutical substance administered to a recipient subject, expressed in terms of the size of the subject."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000308",
      "name": "milligram per kilogram",
      "description": [
        "A dose unit which is equal to 1 milligram of a toxic or pharmaceutical substance per kilogram body weight of the recipient subject."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000309",
      "name": "milligram per square meter",
      "description": [
        "A dose unit which is equal to 1 milligram of a toxic or pharmaceutical substance per square meter of surface area of the recipient subject."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000310",
      "name": "dosage unit",
      "description": [
        "A concentration unit which is a standard measure of the amount of a toxic or pharmaceutical substance administered over time to a recipient subject, expressed in terms of the size of the subject."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000311",
      "name": "milligram per kilogram per day",
      "description": [
        "A dosage unit which is equal to 1 milligram per day of a toxic or pharmaceutical substance per kilogram body weight of the recipient subject."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000312",
      "name": "relative light unit",
      "description": [
        "A derived unit which is a measure of relative light intensity, as typically measured by a luminometer, spectrophotometer, or fluorimeter in biological research applications."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000313",
      "name": "relative luminescence unit",
      "description": [
        "A relative light unit which is a measure of relative luminescence intensity."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000314",
      "name": "relative fluorescence unit",
      "description": [
        "A relative light unit which is a measure of relative fluorescence intensity."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000315",
      "name": "turbidity unit",
      "description": [
        "A unit used to indicate the clarity of water or other solutions or suspensions, as measured by the ability of the solution or suspension to scatter light of a defined wavelength range."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000316",
      "name": "cells per microliter",
      "description": [
        "A unit of cell concentration which is equal to one cell in a volume of 1 microliter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000317",
      "name": "cells per well",
      "description": [
        "A unit of cell concentration which is equal to 1 cell in a well or discrete container of arbitrary volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000318",
      "name": "formazin nephelometric unit",
      "description": [
        "1000 formazin turbidity units (FNU) on the empirical formazin turbidity scale represents reflectance of insol. reaction products of 0.0725 g hydrazine sulfate with 0.7250 g hexamethylenetetramine diluted to 1 L."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000319",
      "name": "radioactivity concentration",
      "description": [
        "A concentration unit which is a standard measure of the amount of radioactivity in a given volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000320",
      "name": "curie per liter",
      "description": [
        "A unit of radioactivity concentration which is equal to one curie in a volume of 1 liter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000321",
      "name": "microcurie per milliliter",
      "description": [
        "A unit of radioactivity concentration which is equal to one micro curie in a volume of 1 liter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000322",
      "name": "fold dilution",
      "description": [
        "A unit that is the ratio of concentration of two solutions of interest, typically with one solution derived from the other by the addition of solvent."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000323",
      "name": "ton per hectare",
      "description": [
        "An area density unit which is equal to the mass of an object in tons divided by the surface area in hectares."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000324",
      "name": "square angstrom",
      "description": [
        "An area unit which is equal to an area enclosed by a square with sides each 1 angstrom long."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000325",
      "name": "megaHertz",
      "description": [
        "A frequency unit which is equal to one million hertz or 10^[6] V."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000326",
      "name": "centiMorgan",
      "description": [
        "A unit used to express distances on a genetic map. In genetic mapping, distances between markers are determined by measuring the rate of meoitic recombination between them, which increases proportionately with the distance separating them. A cM is defined as the length of an interval in which there is a 1% probability of recombination. On the average, 1 cM is roughly equivalent to 1 megabase (Mb) of DNA, although this can vary widely due to hot and cold spots of recombination."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000327",
      "name": "centiRay",
      "description": [
        "A unit of genetic map distance defined corresponding to an interval in which there is a 1% probability of X-irradiation induced breakage. To be completely specified, the unit must be qualified by the radiation in dosage in rads (e.g. cR8000), because this determines the actual breakage probability."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000328",
      "name": "kilobasepair",
      "description": [
        "A unit equal to one thousand base pairs."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000329",
      "name": "megabasepair",
      "description": [
        "A unit equal to one million base pairs"
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000330",
      "name": "gigabasepair",
      "description": [
        "A unit equal to one billion base pairs."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000331",
      "name": "gigabyte",
      "description": [
        "An information unit which is equal to 1000000000 bytes."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0000332",
      "name": "terabyte",
      "description": [
        "An information unit which is equal to 1000 gigabytes."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010001",
      "name": "square micrometer",
      "description": [
        "An area unit which is equal to an area enclosed by a square with sides each 1 micrometer long."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010002",
      "name": "millisiemens",
      "description": [
        "An electrical conduction unit which is equal to one thousandth of a siemen or 10^[-3] siemens."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010003",
      "name": "micromole per litre",
      "description": [
        "A specific concentration unit which is equal to 1 micromole in a given volume of one thousandth of a cubic meter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010004",
      "name": "micromole per kilogram",
      "description": [
        "A specific concentration unit which is equal to 1 micromole of a given substance per kilogram of solvent."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010005",
      "name": "millimeters per day",
      "description": [
        "A speed/velocity unit which is equal to the speed of an object traveling 1 millimeter distance in one day."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010006",
      "name": "ratio",
      "description": [
        "A dimensionless ratio unit which, given a pair of quantities a and b, for which b is a multiple of a, denotes b by giving the multiplier (coefficient) c for a to result in b."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010007",
      "name": "volt-second per square centimeter",
      "description": [
        "An electrical mobility unit which is equal to one volt second per square centimeter."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010008",
      "name": "kilometer per hour",
      "description": [
        "A speed/velocity unit which is equal to the speed of an object traveling 1 kilometer distance in one hour."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010009",
      "name": "milli",
      "description": [
        "A mass unit which is equal to 1/12 the mass of 12C"
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010010",
      "name": "hectare",
      "description": [
        "An area unit which is equal to an area of 10,000 square meters. Equivalent to 2.471 acres."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010011",
      "name": "inch",
      "description": [
        "A length unit which is equal to 0.0254 metres."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010012",
      "name": "thou",
      "description": [
        "A length unit which is equal to 0.0254 millimetres."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010013",
      "name": "foot",
      "description": [
        "A length unit which is equal to 0.3048 metres, or 12 inches."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010014",
      "name": "yard",
      "description": [
        "A length unit which is equal to 0.9144 metres, or 3 feet."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010015",
      "name": "chain",
      "description": [
        "A length unit which is equal to 20.1168 metres, 66 feet, or 22 yards."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010016",
      "name": "furlong",
      "description": [
        "A length unit which is equal to 20,116.8 metres, 660 feet, or 10 chains."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010017",
      "name": "mile",
      "description": [
        "A length unit which is equal to 1,609.344 metres, or 8 furlongs."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010018",
      "name": "league",
      "description": [
        "A length unit which is equal to 3 miles, or 4,828.032 metres"
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010019",
      "name": "maritime length unit",
      "description": [
        "A maritime length unit is one used primarily at sea."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010020",
      "name": "fathom",
      "description": [
        "A maritime length unit which is equal to 6.08 feet, or 1.853184 metres"
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010021",
      "name": "cable",
      "description": [
        "A maritime length unit which is equal to 608 feet, 100 fathoms, or 185.3184 metres"
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010022",
      "name": "nautical mile",
      "description": [
        "A maritime length unit which is equal to 6,080 feet, 10 cables, or 1,853.184 metres"
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010023",
      "name": "perch",
      "description": [
        "An area unit which is equal to an area of 25.292,852,64 square meters, or 1 square rod."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010024",
      "name": "rood",
      "description": [
        "An area unit which is equivalent to 1 furlong x 1 rod. This is equal to an area of 1,011.714,1056 square meters, or 40 square rods."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010025",
      "name": "acre",
      "description": [
        "An area unit which is equivalent to 1 furlong x 1 chain. This is equal to an area of 4,046.856,4224 square meters, or 43,500 square feet."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010026",
      "name": "fluid ounce",
      "description": [
        "An imperial volume unit which is equivalent to 28.413,0625 millilitres."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010027",
      "name": "gill",
      "description": [
        "An imperial volume unit which is equivalent to 142.065,3125 millilitres."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010028",
      "name": "pint",
      "description": [
        "An imperial volume unit which is equivalent to 568.261,25 millilitres."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010029",
      "name": "quart",
      "description": [
        "An imperial volume unit which is equivalent to 1,136.5225 millilitres, or two pints."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010030",
      "name": "gallon",
      "description": [
        "An imperial volume unit which is equivalent to 4,546.09 millilitres, or 8 pints."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010031",
      "name": "grain",
      "description": [
        "An imperial mass unit which is equivalent to 64.798,91 milligrams."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010032",
      "name": "drachm",
      "description": [
        "An imperial mass unit which is equivalent to 1.771,845,195,3125 grams, or 1/256 of 1 pound."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010033",
      "name": "ounce",
      "description": [
        "An imperial mass unit which is equivalent to 28.349,523,125 grams, or 1/16 of 1 pound."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010034",
      "name": "pound",
      "description": [
        "An imperial mass unit which is equivalent to 453.592,37 grams."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010035",
      "name": "stone",
      "description": [
        "An imperial mass unit which is equivalent to 6,350.293,18 grams, or 14 pounds."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010036",
      "name": "quarter",
      "description": [
        "An imperial mass unit which is equivalent to 12.700,586,36 kilograms, or 28 pounds."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010037",
      "name": "hundredweight",
      "description": [
        "An imperial mass unit which is equivalent to 50.802,345,44 kilograms, 112 pounds, or 8 stone."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010038",
      "name": "ton",
      "description": [
        "An imperial mass unit which is equivalent to 1,016.046,9088 kilograms, or 2,240 pounds."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010039",
      "name": "slug",
      "description": [
        "An imperial gravitational unit which is equivalent to a mass that accelerates by 1ft/s² when a force of one pound (lbf) is exerted on it."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010040",
      "name": "teaspoon",
      "description": [
        "A metric teaspoon is a unit of measurement of volume widely used in cooking recipes and pharmaceutic prescriptions. It equals a 5mL volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010041",
      "name": "united states customary teaspoon",
      "description": [
        "A United States customary units teaspoon is a unit of measurement of volume widely used in cooking recipes and pharmaceutic prescriptions in America. It equals a 4.93 mL volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010042",
      "name": "tablespoon",
      "description": [
        "A metric tablespoon is a unit of measurement of volume widely used in cooking recipes and pharmaceutic prescriptions. It equals a 15mL volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010043",
      "name": "australian metric tablespoon",
      "description": [
        "An Australian metric tablespoon is a unit of measurement of volume used in Australia for cooking recipes and pharmaceutic prescriptions. It equals a 20mL volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010044",
      "name": "united states customary tablespoon",
      "description": [
        "A United States customary units tablespoon is a unit of measurement of volume widely used in cooking recipes and pharmaceutic prescriptions in America. It equals a 14.79 mL volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010045",
      "name": "metric cup",
      "description": [
        "A metric cup is a unit of measurement of volume widely used in cooking recipes and pharmaceutic prescriptions. It equals a 250mL volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010046",
      "name": "united states customary cup",
      "description": [
        "A United States customary units cup is a unit of measurement of volume widely used in cooking recipes and pharmaceutic prescriptions in America. It equals a 236.59 mL volume."
      ],
      "editor_note": []
    },
    {
      "id": "UO_0010047",
      "name": "united states fda cup",
      "description": [
        "A United States FDA cup is a unit of measurement of volume used by the US Federal Department of Agriculture as a nutritional serving measure. It equals a 240 mL volume."
      ],
      "editor_note": []
    }
];
