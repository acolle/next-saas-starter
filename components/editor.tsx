'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Edit2, Save } from 'lucide-react';

const Editor = () => {
  
  const [planData, setPlanData] = useState({
    sections: [
      {
        id: "1",
        title: "Analyse de la situation actuelle",
        subsections: [
          {
            id: "1.1",
            title: "Analyse interne",
            content: "- Forces et faiblesses de l'entreprise\n- Ressources disponibles\n- Analyse des ventes actuelles",
            isEditing: false
          },
          {
            id: "1.2",
            title: "Analyse externe",
            content: "- Étude du marché\n- Analyse de la concurrence\n- Évolutions réglementaires",
            isEditing: false
          }
        ],
        isOpen: false
      },
      {
        id: "2",
        title: "Objectifs marketing",
        subsections: [
          {
            id: "2.1",
            title: "Objectifs commerciaux",
            content: "- Objectifs de chiffre d'affaires\n- Parts de marché visées\n- Taux de conversion",
            isEditing: false
          }
        ],
        isOpen: false
      }
    ]
  });

  const toggleSection = (sectionId: string) => {
    setPlanData(prev => ({
      ...prev,
      sections: prev.sections.map(section => 
        section.id === sectionId 
          ? { ...section, isOpen: !section.isOpen }
          : section
      )
    }));
  };

  const toggleEdit = (sectionId: string, subsectionId: string) => {
    setPlanData(prev => ({
      ...prev,
      sections: prev.sections.map(section => ({
        ...section,
        subsections: section.subsections.map(subsection =>
          section.id === sectionId && subsection.id === subsectionId
            ? { ...subsection, isEditing: !subsection.isEditing }
            : subsection
        )
      }))
    }));
  };

  const updateContent = (sectionId: string, subsectionId: string, newContent: string) => {
    setPlanData(prev => ({
      ...prev,
      sections: prev.sections.map(section => ({
        ...section,
        subsections: section.subsections.map(subsection =>
          section.id === sectionId && subsection.id === subsectionId
            ? { ...subsection, content: newContent }
            : subsection
        )
      }))
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Plan Marketing - Systèmes d&apos;extinction d&apos;incendie</CardTitle>
        </CardHeader>
        <CardContent>
          {planData.sections.map(section => (
            <Collapsible
              key={section.id}
              open={section.isOpen}
              className="mb-4"
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-between p-2 hover:bg-gray-100"
                  onClick={() => toggleSection(section.id)}
                >
                  <span className="text-lg font-medium">
                    {section.id}. {section.title}
                  </span>
                  {section.isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-2">
                {section.subsections.map(subsection => (
                  <Card key={subsection.id} className="mb-2 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{subsection.id} {subsection.title}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleEdit(section.id, subsection.id)}
                      >
                        {subsection.isEditing ? <Save className="h-4 w-4" /> : <Edit2 className="h-4 w-4" />}
                      </Button>
                    </div>
                    
                    {subsection.isEditing ? (
                      <textarea
                        className="w-full min-h-[100px] p-2 border rounded"
                        value={subsection.content}
                        onChange={(e) => updateContent(section.id, subsection.id, e.target.value)}
                      />
                    ) : (
                      <div className="whitespace-pre-wrap">
                        {subsection.content}
                      </div>
                    )}
                  </Card>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Editor;