import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  // Fungsi pembantu untuk menentukan warna badge Priority
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return <Badge bg="danger">High</Badge>;
      case 'Medium':
        return <Badge bg="warning" text="dark">Medium</Badge>;
      case 'Low':
        return <Badge bg="success">Low</Badge>;
      default:
        return <Badge bg="secondary">{priority}</Badge>;
    }
  };

  // Fungsi pembantu untuk menentukan warna badge Status
  const getStatusBadge = (status) => {
    switch (status) {
      case 'To Do':
        return <Badge bg="secondary">To Do</Badge>;
      case 'In Progress':
        return <Badge bg="info" text="dark">In Progress</Badge>;
      case 'Done':
        return <Badge bg="primary">Done</Badge>;
      default:
        return <Badge bg="light" text="dark">{status}</Badge>;
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center text-muted my-4">
        <p>Belum ada tugas. Klik tombol "+ Add Task" untuk menambahkan.</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <Card className="mb-2 shadow-sm border-0 bg-light" key={task.id}>
          <Card.Body className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 flex-grow-1">
              {/* Kolom Nama Tugas */}
              <div style={{ minWidth: '200px' }}>
                <small className="text-uppercase text-muted fw-bold d-block" style={{ fontSize: '10px' }}>Task</small>
                <span className="fw-semibold text-dark">{task.name}</span>
              </div>
              
              {/* Kolom Priority */}
              <div style={{ minWidth: '100px' }}>
                <small className="text-uppercase text-muted fw-bold d-block" style={{ fontSize: '10px' }}>Priority</small>
                {getPriorityBadge(task.priority)}
              </div>

              {/* Kolom Status */}
              <div style={{ minWidth: '100px' }}>
                <small className="text-uppercase text-muted fw-bold d-block" style={{ fontSize: '10px' }}>Status</small>
                {getStatusBadge(task.status)}
              </div>
            </div>

            {/* Tombol Aksi (Edit & Delete dengan Simbol Ikon Kreatif) */}
            <div className="d-flex gap-2">
              <Button 
                variant="outline-primary" 
                size="sm"
                onClick={() => showEditForm(task)}
                title="Edit Task"
              >
                ✏️ Edit
              </Button>
              <Button 
                variant="outline-danger" 
                size="sm"
                onClick={() => deleteTask(task.id)}
                title="Delete Task"
              >
                🗑️ Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
