<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Resources\ProjectResource;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Project::all()->sortBy('id');
        return new ProjectResource($results);
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
        $project = new Project();
        $project->project_title = $request->project_title;
        $project->project_details = $request->project_details;
        $project->project_cost = $request->project_cost;
        $project->project_funder = $request->project_funder;
        $project->created_by = $request->created_by;
        $project->updated_by = $request->updated_by;
        $project->deleted_by = $request->deleted_by;
        $project->status = $request->status;
        $project->created_at = $request->created_at;
        $project->updated_at = $request->updated_at;
        $project->deleted_at = $request->deleted_at;
        if($project->save()){
            return new ProjectResource($project);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project, $id)
    {
        $project = Project::findOrFail($id);
        return new ProjectResource($project);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project, $id)
    {
        $project = Project::findOrFail($id);
        $project->project_title = $request->project_title;
        $project->project_details = $request->project_details;
        $project->project_cost = $request->project_cost;
        $project->project_funder = $request->project_funder;
        $project->created_by = $request->created_by;
        $project->updated_by = $request->updated_by;
        $project->deleted_by = $request->deleted_by;
        $project->status = $request->status;
        $project->created_at = $request->created_at;
        $project->updated_at = $request->updated_at;
        $project->deleted_at = $request->deleted_at;
        if($project->save()){
            return new ProjectResource($project);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project, $id)
    {
        $project = Project::findOrFail($id);
        if($project->delete()){
            return new ProjectResource($project);
        }
    }
}
