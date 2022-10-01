<?php

namespace App\Http\Controllers;

use App\Models\Advertisement;
use Illuminate\Http\Request;
use App\Http\Resources\AdvertisementResource;

class AdvertisementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Advertisement::all()->sortBy('id');
        return new AdvertisementResource($results);    
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
        $advertisement = new Advertisement();
        $advertisement->adv_title = $request->adv_title;
        $advertisement->adv_des = $request->adv_des;
        $advertisement->attachment = $request->attachment;
        $advertisement->created_by = $request->created_by;
        $advertisement->updated_by = $request->updated_by;
        $advertisement->deleted_by = $request->deleted_by;
        $advertisement->status = $request->status;
        $advertisement->created_at = $request->created_at;
        $advertisement->updated_at = $request->updated_at;
        $advertisement->deleted_at = $request->deleted_at;
        if($advertisement->save()){
            return new AdvertisementResource($advertisement);
    
    }}


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Advertisement  $advertisement
     * @return \Illuminate\Http\Response
     */
    public function show(Advertisement $advertisement, $id)
    {
        $advertisement = Advertisement::findOrFail($id);
        return new AdvertisementResource($advertisement); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Advertisement  $advertisement
     * @return \Illuminate\Http\Response
     */
    public function edit(Advertisement $advertisement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Advertisement  $advertisement
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Advertisement $advertisement, $id)
    {
        $advertisement = Advertisement::findOrFail($id);
        $advertisement->adv_title = $request->adv_title;
        $advertisement->adv_des = $request->adv_des;
        $advertisement->attachment = $request->attachment;
        $advertisement->created_by = $request->created_by;
        $advertisement->updated_by = $request->updated_by;
        $advertisement->deleted_by = $request->deleted_by;
        $advertisement->status = $request->status;
        $advertisement->created_at = $request->created_at;
        $advertisement->updated_at = $request->updated_at;
        $advertisement->deleted_at = $request->deleted_at;
        if($advertisement->save()){
            return new AdvertisementResource($advertisement);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Advertisement  $advertisement
     * @return \Illuminate\Http\Response
     */
    public function destroy(Advertisement $advertisement, $id)
    {
        $advertisement = Advertisement::findOrFail($id);
        if($advertisement->delete()){
            return new AdvertisementResource($advertisement);
        }
    }
}
