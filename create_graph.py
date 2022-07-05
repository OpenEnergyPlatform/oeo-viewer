from rdflib import Graph, RDFS, URIRef
from collections import defaultdict
import json

g = Graph()
g.parse("./oeo/oeo-full.owl")

q_global = g.query("""
    SELECT DISTINCT ?s ?o
    WHERE { ?s rdfs:subClassOf ?o
    filter(!isBlank(?o))
    }
    """)

q_label =  g.query("""
    SELECT DISTINCT ?s ?o
    WHERE { ?s rdfs:label ?o }
    """)

q_definition =  g.query("""
    SELECT DISTINCT ?s ?o
    WHERE { ?s obo:IAO_0000115 ?o }
    """)

q_note =  g.query("""
    SELECT DISTINCT ?s ?o
    WHERE { ?s obo:IAO_0000116 ?o }
    """)

q_main_description =  g.query("""
    SELECT ?s ?o
    WHERE { ?s dc:description ?o }
    """)

classes_name = {}
for row in q_label:
    class_name = row.s.split('/')[-1]
    classes_name[class_name] = row.o

classes_definitions = defaultdict(list)
for row in q_definition:
    class_name = row.s.split('/')[-1]
    classes_definitions[class_name].append(row.o)

classes_notes = defaultdict(list)
for row in q_note:
    class_name = row.s.split('/')[-1]
    classes_notes[class_name].append(row.o)

ontology_description = ''
for row in q_main_description:
    if (row.s.split('/')[-1] == ''):
        ontology_description = row.o

# Begin prepare data for oeo-viewer. Only need to be executed once per release
graphLinks = []
graphNodes = []

for row in q_global:
    source = row.o.split('/')[-1]
    target = row.s.split('/')[-1]

    #if source in classes_name.keys() and target in classes_name.keys():
    graphLinks.append({
        "source": source,
        "target": target
        })

    target_found = False
    source_found = False

    for item in graphNodes:
        if item["id"] == target:
            target_found = True
        if item["id"] == source:
            source_found = True

    try:
        if not target_found:
            graphNodes.append({
                "id": target,
                "name": classes_name[target],
                "description": classes_definitions[target],
                "editor_note": classes_notes[target]
                })

        if not source_found:
            graphNodes.append({
                "id": source,
                "name": classes_name[source],
                "description": classes_definitions[source],
                "editor_note": classes_notes[source]
                })
    except:
        pass

with open('client/source-code/statics/oeo_info.json', 'w') as f:
    json.dump({"nodes": graphNodes,
                "links": graphLinks}, f)


print('- - - - - - - - - - ')
print('data for oeo-viewer prepared!')
