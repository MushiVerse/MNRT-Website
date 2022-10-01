<?php

namespace App\Http\Controllers;
use App\Models\Ministy;
use Illuminate\Http\Request;
use App\Http\Resources\MinistryResource;


class MinistryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
            $results = Ministry::all()->sortBy('id');
            return new MinistryResource($results);    
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
        $ministy = new Ministry();
        $ministy->vision = $request->vision;
        $ministy->mission = $request->mission;
        $ministy->ministry = $request->ministry;
        $ministy->ministry_history = $request->ministry_history;
        $ministy->created_by = $request->created_by;
        $ministy->updated_by = $request->updated_by;
        $ministy->deleted_by = $request->deleted_by;
        $ministy->created_at = $request->created_at;
        $ministy->updated_at = $request->updated_at;
        $ministy->deleted_at = $request->deleted_at;
        if($ministy->save()){
            return new MinistryResource($ministy);      
        }   
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Ministry $ministry, $id)
    {
        $ministy = Ministry::findOrFail($id);
        return new MinistryResource($ministry); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ministry $ministry, $id)
    {
        $ministry = Ministry::findOrFail($id);
        $ministy->vision = $request->vision;
        $ministy->mission = $request->mission;
        $ministy->ministry = $request->ministry;
        $ministy->ministry_history = $request->ministry_history;
        $ministy->created_by = $request->created_by;
        $ministy->updated_by = $request->updated_by;
        $ministy->deleted_by = $request->deleted_by;
        $ministy->created_at = $request->created_at;
        $ministy->updated_at = $request->updated_at;
        $ministy->deleted_at = $request->deleted_at;
        if($ministry->save()){
            return new MinistryResource($ministry);
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ministry $ministry, $id)
    {
        $ministry = Ministry::findOrFail($id);
        if($ministry->delete()){
            return new MinistryResource($ministry);
        }
    }
}
