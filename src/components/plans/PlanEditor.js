import React from 'react';
import PropTypes from 'prop-types';
import PlanStep from './PlanStep';
import { useHistory } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './PlanEditor.css';

//setName
//PlanStep
//newPlanStep
const PlanEditor = ({ planName, planSteps, setPlanName, setPlanSteps }) => {
  let history = useHistory();
  const deleteStep = (id) => {
    setPlanSteps(planSteps.filter((step) => step._id !== id));
  };

  const editStep = (newVals, id) => {
    const editIdx = planSteps.findIndex((step) => step._id === id);
    const newStep = { ...planSteps[editIdx], ...newVals };
    let newPlanSteps = planSteps;
    newPlanSteps[editIdx] = newStep;
    setPlanSteps([...newPlanSteps]);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const steps = Array.from(planSteps);
    const [reorderedStep] = steps.splice(result.source.index, 1);
    steps.splice(result.destination.index, 0, reorderedStep);
    setPlanSteps([...steps]);
  };

  return (
    <div className='planEditor'>
      <div className='row'>
        <div className='input-field col s12 m6 offset-m3 l4 offset-l4'>
          <input
            id='planName'
            type='text'
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
          />
          <label htmlFor='planName' className='active'>
            Plan Name
          </label>
        </div>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='planSteps'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {planSteps.map((step, index) => (
                <Draggable
                  key={step._id + index}
                  draggableId={step._id + index.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <PlanStep
                        step={step}
                        deleteStep={deleteStep}
                        editStep={editStep}
                        isLast={index === planSteps.length - 1 ? true : false}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className='addStepDiv' onClick={() => history.push('/add-step')}>
        + Add Step
      </div>
    </div>
  );
};

PlanEditor.propTypes = {
  planName: PropTypes.string.isRequired,
  setPlanName: PropTypes.func.isRequired,
  planSteps: PropTypes.array.isRequired,
  setPlanSteps: PropTypes.func.isRequired,
};

export default PlanEditor;
