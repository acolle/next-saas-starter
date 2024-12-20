'use client';

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle, Trash2, Code, Copy } from "lucide-react";

const SchemaGenerator = () => {
  const [entities, setEntities] = useState([
    {
      name: "",
      fields: [{ name: "", type: "string", required: true }],
      relations: [],
    },
  ]);

  const [generatedCode, setGeneratedCode] = useState({
    schema: "",
    actions: "",
  });

  const fieldTypes = [
    "string",
    "number",
    "boolean",
    "date",
    "enum",
    "text",
    "json",
    "timestamp",
    "uuid",
  ];

  const addEntity = () => {
    setEntities([
      ...entities,
      {
        name: "",
        fields: [{ name: "", type: "string", required: true }],
        relations: [],
      },
    ]);
  };

  const removeEntity = (entityIndex) => {
    setEntities(entities.filter((_, index) => index !== entityIndex));
  };

  const addField = (entityIndex) => {
    const newEntities = [...entities];
    newEntities[entityIndex].fields.push({
      name: "",
      type: "string",
      required: true,
    });
    setEntities(newEntities);
  };

  const removeField = (entityIndex, fieldIndex) => {
    const newEntities = [...entities];
    newEntities[entityIndex].fields = newEntities[entityIndex].fields.filter(
      (_, index) => index !== fieldIndex
    );
    setEntities(newEntities);
  };

  const updateField = (entityIndex, fieldIndex, key, value) => {
    const newEntities = [...entities];
    newEntities[entityIndex].fields[fieldIndex][key] = value;
    setEntities(newEntities);
  };

  const updateEntityName = (entityIndex, name) => {
    const newEntities = [...entities];
    newEntities[entityIndex].name = name;
    setEntities(newEntities);
  };

  const generateDrizzleSchema = () => {
    let schema = `import { sql } from "drizzle-orm";\n`;
    schema += `import { text, timestamp, pgTable, uuid, boolean, integer, jsonb } from "drizzle-orm/pg-core";\n\n`;

    entities.forEach((entity) => {
      if (!entity.name) return;

      schema += `export const ${entity.name.toLowerCase()} = pgTable("${entity.name.toLowerCase()}", {\n`;

      // Add default fields
      schema += `  id: uuid("id").defaultRandom().primaryKey(),\n`;
      schema += `  createdAt: timestamp("created_at").default(sql\`CURRENT_TIMESTAMP\`),\n`;
      schema += `  updatedAt: timestamp("updated_at").default(sql\`CURRENT_TIMESTAMP\`),\n`;

      // Add custom fields
      entity.fields.forEach((field) => {
        if (!field.name) return;

        let fieldType = "";
        switch (field.type) {
          case "string":
            fieldType = "text";
            break;
          case "number":
            fieldType = "integer";
            break;
          case "boolean":
            fieldType = "boolean";
            break;
          case "json":
            fieldType = "jsonb";
            break;
          default:
            fieldType = field.type;
        }

        schema += `  ${field.name}: ${fieldType}("${field.name}")`;
        if (field.required) {
          schema += `.notNull()`;
        }
        schema += ",\n";
      });

      schema += "});\n\n";
    });

    return schema;
  };

  const generateServerActions = () => {
    let actions = `"use server";\n\n`;
    actions += `import { db } from "@/lib/db";\n`;
    actions += `import { revalidatePath } from "next/cache";\n\n`;

    entities.forEach((entity) => {
      if (!entity.name) return;

      const entityName = entity.name.toLowerCase();

      // Create
      actions += `export async function create${entity.name}(data: any) {\n`;
      actions += `  try {\n`;
      actions += `    const result = await db.insert(${entityName}).values(data);\n`;
      actions += `    revalidatePath("/${entityName}");\n`;
      actions += `    return { success: true, data: result };\n`;
      actions += `  } catch (error) {\n`;
      actions += `    return { success: false, error };\n`;
      actions += `  }\n`;
      actions += `}\n\n`;

      // Read
      actions += `export async function get${entity.name}(id: string) {\n`;
      actions += `  try {\n`;
      actions += `    const result = await db.query.${entityName}.findFirst({\n`;
      actions += `      where: (${entityName}, { eq }) => eq(${entityName}.id, id)\n`;
      actions += `    });\n`;
      actions += `    return { success: true, data: result };\n`;
      actions += `  } catch (error) {\n`;
      actions += `    return { success: false, error };\n`;
      actions += `  }\n`;
      actions += `}\n\n`;

      // Update
      actions += `export async function update${entity.name}(id: string, data: any) {\n`;
      actions += `  try {\n`;
      actions += `    const result = await db.update(${entityName})\n`;
      actions += `      .set(data)\n`;
      actions += `      .where(eq(${entityName}.id, id));\n`;
      actions += `    revalidatePath("/${entityName}");\n`;
      actions += `    return { success: true, data: result };\n`;
      actions += `  } catch (error) {\n`;
      actions += `    return { success: false, error };\n`;
      actions += `  }\n`;
      actions += `}\n\n`;

      // Delete
      actions += `export async function delete${entity.name}(id: string) {\n`;
      actions += `  try {\n`;
      actions += `    const result = await db.delete(${entityName})\n`;
      actions += `      .where(eq(${entityName}.id, id));\n`;
      actions += `    revalidatePath("/${entityName}");\n`;
      actions += `    return { success: true, data: result };\n`;
      actions += `  } catch (error) {\n`;
      actions += `    return { success: false, error };\n`;
      actions += `  }\n`;
      actions += `}\n\n`;
    });

    return actions;
  };

  const generateCode = () => {
    const schema = generateDrizzleSchema();
    const actions = generateServerActions();
    setGeneratedCode({ schema, actions });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Next.js Business Logic Generator</CardTitle>
          <CardDescription>
            Define your entities and their fields to generate Drizzle schemas
            and server actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {entities.map((entity, entityIndex) => (
              <Card key={entityIndex} className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex-1 mr-4">
                    <Label>Entity Name</Label>
                    <Input
                      value={entity.name}
                      onChange={(e) =>
                        updateEntityName(entityIndex, e.target.value)
                      }
                      placeholder="e.g., User, Product, Order"
                    />
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeEntity(entityIndex)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {entity.fields.map((field, fieldIndex) => (
                    <div key={fieldIndex} className="flex gap-4">
                      <div className="flex-1">
                        <Label>Field Name</Label>
                        <Input
                          value={field.name}
                          onChange={(e) =>
                            updateField(
                              entityIndex,
                              fieldIndex,
                              "name",
                              e.target.value
                            )
                          }
                          placeholder="e.g., name, email, price"
                        />
                      </div>
                      <div className="w-40">
                        <Label>Type</Label>
                        <Select
                          value={field.type}
                          onValueChange={(value) =>
                            updateField(entityIndex, fieldIndex, "type", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {fieldTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-end">
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removeField(entityIndex, fieldIndex)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => addField(entityIndex)}
                  className="mt-4"
                >
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Field
                </Button>
              </Card>
            ))}

            <Button onClick={addEntity}>
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Entity
            </Button>

            <Button onClick={generateCode} className="ml-4">
              <Code className="w-4 h-4 mr-2" />
              Generate Code
            </Button>
          </div>

          {(generatedCode.schema || generatedCode.actions) && (
            <div className="mt-8 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    Drizzle Schema
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(generatedCode.schema)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={generatedCode.schema}
                    readOnly
                    className="font-mono h-64"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    Server Actions
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(generatedCode.actions)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={generatedCode.actions}
                    readOnly
                    className="font-mono h-64"
                  />
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SchemaGenerator;
