<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use App\Http\Resources\DepartmentResource;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Department::all()->sortBy('id');
        return new DepartmentResource($results);     
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $department = new Department();
        $department->dept_vote = $request->dept_vote;
        $department->dept_subvote = $request->dept_subvote;
        $department->dept_name = $request->dept_name;
        $department->created_by = $request->created_by;
        $department->updated_by = $request->updated_by;
        $department->deleted_by = $request->deleted_by;
        $department->status = $request->status;
        $department->created_at = $request->created_at;
        $department->updated_at = $request->updated_at;
        $department->deleted_at = $request->deleted_at;
        if($department->save()){
            return new DepartmentResource($department);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department, $id)
    {
        $leader = Department::findOrFail($id);
        return new DepartmentResource($department);  
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Department $department, $id)
    {
        $department = Department::findOrFail($id);
        $department->dept_vote = $request->dept_vote;
        $department->dept_subvote = $request->dept_subvote;
        $department->dept_name = $request->dept_name;
        $department->created_by = $request->created_by;
        $department->updated_by = $request->updated_by;
        $department->deleted_by = $request->deleted_by;
        $department->status = $request->status;
        $department->created_at = $request->created_at;
        $department->updated_at = $request->updated_at;
        $department->deleted_at = $request->deleted_at;
        if($department->save()){
            return new DepartmentResource($department);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department, $id)
    {
        $department = Department::findOrFail($id);
        if($department->delete()){
            return new DepartmentResource($department);
        }

    }
}
